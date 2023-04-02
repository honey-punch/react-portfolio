import 'css/Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <button className='github' onClick={() => {window.open('https://github.com/honey-punch')}}>
        <i className="fa-brands fa-github"></i>
        </button>
    </footer>
  )
}