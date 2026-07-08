import Image from "next/image";

export function Logo() {
  return (
    // A div controla o tamanho da logo. Ajuste o w (largura) e h (altura) conforme o formato da sua imagem.
    <div className="relative h-16 w-64">
      <Image
        src="/logo-progus2.png" // O nome exato do arquivo que você colocou na pasta public
        alt="Logo Progus Contabilidade"
        fill
        className="object-contain"
        priority // Carrega a imagem imediatamente, importante para o Header
      />
    </div>
  );
}