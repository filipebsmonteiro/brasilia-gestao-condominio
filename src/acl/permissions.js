import {
    user_index,
    user_show,
    user_create,
    user_edit
} from "@/acl/permissions/user";
import user_full from "@/acl/permissions/user"
import dashboard from "@/acl/permissions/dashboard"

const user_list = [
    user_index,
    user_show
]

const user_persist = [
    user_create,
    user_edit
]

const admin = dashboard.concat(
    user_full
)

export default {
    admin,
    user_list,
    user_persist
}