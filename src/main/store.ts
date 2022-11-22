import Store from 'electron-store'
import { is } from '@electron-toolkit/utils'

import { Document } from '../shared/types/ipc'

interface StoreType {
  documents: Record<string, Document>
}

export const store = new Store<StoreType>({
  name: is.dev ? 'dev' : 'prod',
  defaults: {
    documents: {},
  },
})
