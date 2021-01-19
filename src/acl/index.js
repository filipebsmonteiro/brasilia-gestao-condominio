import perfils from "@/acl/perfils";

export async function getPerfil() {
    let $perfil = 'root'

    // Implements a Way to recover the User's Perfil

    return $perfil;
}

function AclException(message) {
    this.message = message;
    this.name = "AclException";
}

function checkPerfilExists(perfil) {
    if (typeof perfil === 'string') {
        if (perfils[perfil] === undefined) {
            throw new AclException("Perfil " + perfil + " Inexistente!")
        }
    }

    if (Array.isArray(perfil)) {
        perfil.map(p => {
            if (perfils[p] === undefined) {
                throw new AclException("Perfil " + p + " Inexistente!")
            }
        })
    }
    return true;
}

function checkPermission(perfil, permission) {
    if (perfils[perfil].includes(permission)) {
        return true;
    }

    return false;
}

export async function hasPerfil(perfil) {
    checkPerfilExists(perfil)
    const perfil_local = await getPerfil().then(r => {
        return r
    })

    if (typeof perfil === 'string' && typeof perfil_local === 'string') {
        return perfil_local === perfil
    }

    if (Array.isArray(perfil) && typeof perfil_local === 'string') {
        return perfil.some(p => p.includes(perfil_local))
    }

    if (typeof perfil === 'string' && Array.isArray(perfil_local)) {
        return perfil_local.some(pa => pa.includes(perfil))
    }

    if (Array.isArray(perfil) && Array.isArray(perfil_local)) {
        for (var i = 0; i < perfil.length; i++) {
            if (perfil_local.some(pa => pa.includes(perfil[i]))) {
                return true
            }
        }
        return false
    }
}

export function canPerfil(perfil, permission) {
    checkPerfilExists(perfil)

    if (typeof perfil === 'string' && typeof permission === 'string') {
        return checkPermission(perfil, permission)
    }

    if (Array.isArray(perfil) && typeof permission === 'string') {
        for (let i = 0; i < perfil.length; i++) {
            if (checkPermission(perfil[i], permission)) {
                return true
            }
        }
        return false
    }

    if (typeof perfil === 'string' && Array.isArray(permission)) {
        for (let i = 0; i < permission.length; i++) {
            if (checkPermission(perfil, permission[i])) {
                return true
            }
        }
        return false
    }

    if (Array.isArray(perfil) && Array.isArray(permission)) {
        for (var idx = 0; idx < perfil.length; idx++) {
            for (var i = 0; i < permission.length; i++) {
                if (checkPermission(perfil[idx], permission[i])) {
                    return true
                }
            }
        }
        return false
    }
}

export async function can(permission) {
    const perfil = await getPerfil().then(r => {
        return r
    })
    return canPerfil(perfil, permission)
}

export async function getPermissionsFromActualPerfil() {
    const perfil = await getPerfil().then(r => {
        return r
    })
    return perfils[perfil]
}
