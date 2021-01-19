import permissions from "@/acl/permissions";

export default {
    root: permissions.admin,
    atendente: permissions.user_list,
    gerente: permissions.user_list.concat(
        permissions.user_persist
    ),
}