export function Footer() {

  const date = new Date().getFullYear()

  return (
    <footer className="bg-upsidedown p-5 text-center text-accent">
      <p>Copyright &copy;{ date } - Daniel Medié</p>
    </footer>
  )
}