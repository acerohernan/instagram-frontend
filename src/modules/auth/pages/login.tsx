import { Link } from "react-router-dom";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { TextInput } from "../../../components/text-input";
import { Logo } from "../../../components/logo";

export default function LoginPage() {
  return (
    <div className="h-dvh flex flex-col items-center">
      <Card className="w-full h-min mt-16 py-12">
        {/* Instagram logo */}
        <Logo />
        {/* Login form */}
        <form className="grid mt-8 w-full gap-[6px]">
          <TextInput placeholder="Teléfono, usuario, o correo electrónico" />
          <TextInput placeholder="Contraseña" type="password" />
          <Button type="button" className="mt-1">
            Iniciar sesión
          </Button>
        </form>
      </Card>
      <Card className="text-sm py-6 w-full mt-[10px]">
        <span className="flex gap-1">
          ¿No tienes una cuenta?{" "}
          <Link to="/signup" className="text-[#0095f6] font-medium cursor-pointer">
            Regístrate
          </Link>
        </span>
      </Card>
    </div>
  );
}
