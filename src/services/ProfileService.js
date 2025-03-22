import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { Profile } from "@/models/Profile.js";
import { AppState } from "@/AppState.js";

class ProfilesService {
  async getProfileById(profileId) {

    // NOTE pick up here with getting profile by Id

    // NOTE check how art terminal has activeProfile listed to resolve error on "profile" below


    AppState.activeProfile = null // clears ghost data from appstate
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('GOT PROFILE BY ID', response.data)

    // const profile = new Profile(response.data)
    // AppState.activeProfile = profile.id

  }
}

export const profilesService = new ProfilesService()