import { Link } from "react-router-dom";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { TextInput } from "../../../components/text-input";
import { Logo } from "../../../components/logo";

export default function SignupPage() {
  return (
    <div className="h-dvh flex flex-col items-center">
      <Card className="w-full h-min mt-16 py-12">
        {/* Instagram logo */}
        <Logo />
        <p className="text-[#737373] text-center leading-4 font-semibold mt-3">
          Regístrate para ver fotos y videos de tus amigos.
        </p>
        {/* Login form */}
        <form className="grid mt-8 w-full gap-[6px]">
          <TextInput placeholder="Número de celular o correo electrónico" />
          <TextInput placeholder="Contraseña" type="password" />
          <TextInput placeholder="Nombre completo" />
          <TextInput placeholder="Nombre de usuario" />
          <p className="text-xs text-center text-[#737373] mt-2">
            Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram.{" "}
            <a className="text-[#00376b]">Más información</a>
          </p>
          <p className="text-xs text-center text-[#737373] mt-1">
            Al registrarte, aceptas nuestras <a className="text-[#00376b]">Condiciones</a>, la{" "}
            <a className="text-[#00376b]">Política de privacidad</a> y la{" "}
            <a className="text-[#00376b]">Política de cookies</a>.
          </p>
          <Button type="button" className="mt-2">
            Registrarte
          </Button>
        </form>
      </Card>
      <Card className="text-sm py-6 w-full mt-[10px]">
        <span className="flex flex-col text-center leading-4">
          ¿Tienes una cuenta?
          <Link to="/login" className="text-[#0095f6] font-medium cursor-pointer">
            Iniciar sesión
          </Link>
        </span>
      </Card>
    </div>
  );
}
