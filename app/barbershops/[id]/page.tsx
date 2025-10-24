import { Button } from "@/app/_components/ui/button"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { db } from "@/app/_lib/prisma"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}
const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // Buscar barbearia pelo ID
  const barbershop = await db.barbershop.findUnique({
    where: { id: params.id },
  })

  // ⚠️ Se não encontrar barbearia, exibe uma página amigável
  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>
      {/* DADOS */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm text-gray-400">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm text-gray-400">5,0 499 avaliações</p>
        </div>
      </div>

      {/*DESCIÇAP*/}
      <div className="borde-solid space-y-3 border-b p-5">
        <h1 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h1>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>
    </div>
  )
}

export default BarbershopPage
