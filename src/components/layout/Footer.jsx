export function Footer() {

  const date = new Date().getFullYear()

  return (
    <footer className="bg-upsidedown p-5 text-center text-accent mt-8">
      <p>Copyright &copy;{ date } - Daniel Medié</p>
    </footer>
  )
}