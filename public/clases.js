class Usuario {
    constructor(pcedula, pprimerNombre, psegundoNombre, pprimerApellido, psegundoApellido, pcorreo, pcontrasenna, prol) {
        this.primerNombre = pprimerNombre;
        this.segundoNombre = psegundoNombre;
        this.primerApellido = pprimerApellido;
        this.segundoApellido = psegundoApellido;
        this.cedula = pcedula;
        this.correo = pcorreo;
        this.contrasenna = pcontrasenna;
        this.rol = prol;
    }

    getRol() {
        return this.rol;
    }

    getTipoRol(){
        let rol = this.getRol(),
            nombre;
        if(rol == 1){
            nombre = 'Administrador';
        }else{
            nombre = 'Cliente';
        }
        return nombre;
    }

    getCorreo() {
        return this.correo;
    }

    getContrasenna() {
        return this.contrasenna;
    }

    getCedula() {
        return this.cedula;
    }

    getPrimerNombre(){
        return this.primerNombre;
    }

    getPrimerApellido(){
        return this.primerApellido;
    }

    getSegundoApellido(){
        return this.segundoApellido;
    }

    setPrimerNombre(pnuevoPrimerNombre) {
        this.primerNombre = pnuevoPrimerNombre;
    }

    setSegundoNombre(pnuevoSegundoNombre) {
        this.segundoNombre = pnuevoSegundoNombre;
    }

    setPrimerApellido(pnuevoPrimerApellido) {
        this.primerApellido = pnuevoPrimerApellido;
    }

    setSegundoApellido(pnuevoSegundoApellido) {
        this.segundoApellido = pnuevoSegundoApellido;
    }
}

class Administrador extends Usuario {
    constructor(pcedula, pprimerNombre, psegundoNombre, pprimerApellido, psegundoApellido, pcorreo, pcontrasenna, prol) {
        super(pcedula, pprimerNombre, psegundoNombre, pprimerApellido, psegundoApellido, pcorreo, pcontrasenna, prol);
    }
}

class Clientes extends Usuario {
    constructor(pcedula, pprimerNombre, psegundoNombre, pprimerApellido, psegundoApellido, pcorreo, pcontrasenna, prol, pedad, ptelefono) {
        super(pcedula, pprimerNombre, psegundoNombre, pprimerApellido, psegundoApellido, pcorreo, pcontrasenna, prol)

        this.edad = pedad;
        this.telefono = ptelefono;
    }

    getEdad() {
        return this.edad;
    }

    getTelefono() {
        return this.telefono;
    }

    getEdad() {
        return this.edad;
    }

    setTelefono(ptelefono) {
        this.telefono = pnuevoTelefono;
    }

    setEdad() {
        this.edad = pnuevoEdad;
    }
}

class Hotel {
    constructor(pid, ptipoHotel, pcnombreHotel, pfoto, platitud, plongitud, pprovincia, pcanton, pdistrito, pdireccion, ptelefonoServ, pcorreoServ, ptelefonoReserv, pcorreoReserv) {
        this._id = pid;
        this.tipoHotel = ptipoHotel;
        this.nombreHotel = pcnombreHotel;
        this.foto = pfoto;
        this.latitud = platitud;
        this.longitud = plongitud;
        this.provincia = pprovincia;
        this.canton = pcanton;
        this.distrito = pdistrito;
        this.direccion = pdireccion;
        this.telefonoServicioCliente = ptelefonoServ;
        this.correoServicioCliente = pcorreoServ;
        this.telefonoReservacion = ptelefonoReserv;
        this.correoReservacion = pcorreoReserv;
    }

    getId() {
        return this._id;
    }

    getFoto(){
        return this.foto;
    }

    getTipoHotel() {
        return this.tipoHotel;
    }

    getNombreHotel() {
        return this.nombreHotel;
    }

    getMapLocation() {
        return `$(this.latitud), $(this.longitud)`;
    }

    getProvincia() {
        return JSON.parse(this.provincia);
    }

    getCanton() {
        return JSON.parse(this.canton);
    }

    getDistrito() {
        return JSON.parse(this.distrito);
    }

    getDireccion() {
        return this.direccion;
    }

    getTelefonoServicio() {
        return this.telefonoServicioCliente;
    }

    getCorreoServicio() {
        return this.correoServicioCliente;
    }

    getTelefonoReservacion() {
        return this.telefonoReservacion;
    }

    getCorreoReservacion() {
        return this.correoReservacion;
    }

    setTipoHotel(pnuevotipoHotel) {
        this.tipoHotel = pnuevotipoHotel;
    }

    setNombreHotel(pnuevoNombreHotel) {
        this.name = pNuevoNombreHotel;
    }

    setLatitud(pnuevolatitud) {
        this.latitud = pnuevolatitud;
    }

    setLongitud(pnuevolongitud) {
        this.longitud = pnuevolongitud;
    }

    setProvincia(pnuevoprovincia) {
        this.provincia = pnuevoprovincia;
    }

    setCanton(pnuevoCanton) {
        this.canton = pnuevoCanton;
    }

    setDistrito(pnuevoDistrito) {
        this.distrito = pnuevoDistrito;
    }

    setDireccion() {
        this.direccion = pnuevaDirección;
    }

    setTelefonoServicio(pnuevoServicioCliente) {
        this.telefonoServicioCliente = pnuevoTelefonoServicioCliente;
    }

    setCorreoServicio(pnuevoCorreoServicioCliente) {
        this.correoServicioCliente = pnuevoCorreoServicioCliente;
    }

    setTelefonoReservaciones(pnuevoTelefonoReservaciones) {
        this.telefonoReservacion = pnuevoTelefonoReservaciones;
    }

    setCorreoReservaciones() {
        this.correoReservacion = pnueviCorreoReservaciones;
    }

}