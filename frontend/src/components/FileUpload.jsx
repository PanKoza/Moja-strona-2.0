import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCloudUpload, HiCheck, HiX, HiDocument } from 'react-icons/hi'

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
const MAX_SIZE = 10 * 1024 * 1024 // 10MB

export default function FileUpload({ onFileSelect }) {
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState(null) // 'success' | 'error'
  const [error, setError] = useState('')

  const validateFile = (f) => {
    if (!ALLOWED_TYPES.includes(f.type)) {
      setError('Dozwolone formaty: JPG, PNG, PDF, XLSX')
      return false
    }
    if (f.size > MAX_SIZE) {
      setError('Maksymalny rozmiar pliku to 10 MB')
      return false
    }
    setError('')
    return true
  }

  const handleFile = useCallback((f) => {
    if (validateFile(f)) {
      setFile(f)
      setUploadStatus(null)
      if (onFileSelect) onFileSelect(f)
    }
  }, [onFileSelect])

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return
    setUploading(true)
    setUploadStatus(null)

    try {
      const formData = new FormData()
      formData.append('clientMaterial', file)

      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        setUploadStatus('success')
      } else {
        setUploadStatus('error')
      }
    } catch {
      setUploadStatus('error')
    } finally {
      setUploading(false)
    }
  }

  const removeFile = () => {
    setFile(null)
    setUploadStatus(null)
    setError('')
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-300 mb-1">
        Materiały (opcjonalnie)
      </label>

      {!file ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
            dragActive
              ? 'border-primary-400 bg-primary-900/30'
              : 'border-primary-800/50 hover:border-primary-600 bg-dark-card/50'
          }`}
        >
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf,.xlsx"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <HiCloudUpload className={`mx-auto w-10 h-10 mb-3 transition-colors ${
            dragActive ? 'text-primary-400' : 'text-gray-500'
          }`} />
          <p className="text-sm text-gray-400">
            <span className="text-primary-400 font-medium">Kliknij</span> lub przeciągnij plik
          </p>
          <p className="text-xs text-gray-500 mt-1">JPG, PNG, PDF, XLSX (maks. 10 MB)</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 glass-card rounded-xl"
        >
          <HiDocument className="w-8 h-8 text-primary-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{file.name}</p>
            <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(0)} KB</p>
          </div>

          <AnimatePresence mode="wait">
            {uploadStatus === 'success' && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <HiCheck className="w-5 h-5 text-green-400" />
              </motion.div>
            )}
          </AnimatePresence>

          <button onClick={removeFile} className="p-1.5 text-gray-500 hover:text-red-400 transition-colors">
            <HiX className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}
