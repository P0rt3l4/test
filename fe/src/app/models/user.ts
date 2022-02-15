export interface User{
    id?: number,
    username: string,
    password?: string,
    perfil_id: number,
    correo: string,
    telefono: string,
    estatus: number,
    createAt?:string,
    update?:string,
    usuario_id_creation?: number,
    usuario_id_actualizacion?: number,
    token?: string,
    token_expiracion?:string
}