import { Service } from '@/services/index.ts'

export type ApplicationState = {
  state:
    | 'standby'
    | 'costume-choose'
    | 'costume-info-open'
    | 'costume-info-close'
    | 'costume-photo'
  data: {
    id?: number
  }
}

class ApplicationStateService extends Service {
  constructor() {
    super()
    super.setBaseUrl(window.API)
  }

  async getStateApplication() {
    try {
      return await this.request({
        method: 'get',
        url: '/state/get',
      })
    } catch (e) {
      console.log(e)
      throw false
    }
  }

  async setStateApplication(state: ApplicationState) {
    try {
      await this.request({
        method: 'post',
        url: '/state/post',
        data: state,
      })
    } catch (e) {
      console.log(e)
      throw false
    }
  }
}

export default new ApplicationStateService()
