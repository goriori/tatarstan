import { Service } from '@/services/index.ts'

export type CostumeItem = {
  id: number
  imageFile: string
  image: string
  imagePreviewsFile: string
  imagePreviews: string
  title: string
  description: string
}

class CostumeService extends Service {
  constructor() {
    super()
    super.setBaseUrl(window.API)
  }

  async getCostumes(): Promise<CostumeItem[]> {
    try {
      return await this.request({ url: '/api/costumes' })
    } catch (e) {
      console.log(e)
      throw false
    }
  }

  async getCostume(id: number): Promise<CostumeItem> {
    try {
      return await this.request({ url: `/api/costumes/${id}` })
    } catch (e) {
      console.log(e)
      throw false
    }
  }
}

export default new CostumeService()
