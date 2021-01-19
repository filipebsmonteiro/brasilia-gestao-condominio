import { Repository, createRepository } from '@/repositories/Base/Repository'

class UserRepository extends Repository {
    endpoint = 'users'

}

export default new UserRepository()

export const create = createRepository(UserRepository)