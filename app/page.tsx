import { Button } from "./_components/ui/button"

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-foreground mb-6 text-4xl font-bold">
        Bem-vindo à FSW Barber
      </h1>
      <p className="text-foreground mb-4">
        Agende seu corte perfeito com nosso tema escuro moderno.
      </p>
      <Button className="bg-primary text-primary-foreground">
        Agendar Agora
      </Button>
    </main>
  )
}
