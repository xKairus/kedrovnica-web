import { Button } from "@/shared/ui/Button/Button"
import { Input } from "@/shared/ui/Input/Input"

function App() {
  return (
    <div
      style={{
        padding: 50,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        maxWidth: 600,
      }}
    >
      <h1>UI Kit Test</h1>

      <div style={{ display: "flex", gap: 10 }}>
        <Button>Купить сертификат</Button>
        <Button variant="outline">Подробнее</Button>
      </div>

      <Input placeholder="Ваше имя" />
      <Input placeholder="Телефон" error="Неверный формат" />
    </div>
  )
}

export default App
