import Swal from "sweetalert2";

const message = {
    success: (msg) => {
        Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: msg
        });
    },
    error: (msg) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msg
        });
    },
    info: (msg) => {
        Swal.fire({
            icon: 'info',
            title: 'Atenção',
            text: msg
        });
    },
    confirmation: (msg) => {
        Swal.fire({
            title: 'Atenção',
            text: msg,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
                
            }
        })
    }
};

// message.success("Login efetuado com sucesso.");
// message.error("Email ou senha inválido.");
// message.confirmation("Email ou senha inválido.");

export default message;