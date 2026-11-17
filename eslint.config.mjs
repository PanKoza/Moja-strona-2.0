import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) })

const config = [
  ...compat.extends('next/core-web-vitals'),
  {
    // Komponenty z React Bits utrzymujemy jak najbliżej oryginału
    ignores: ['components/reactbits/**', '.next/**', 'node_modules/**'],
  },
]

export default config
