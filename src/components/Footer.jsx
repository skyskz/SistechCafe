import Image from 'next/image'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">

        <a href="#">
          <Image src="/instagram.svg"
          alt='Instagram'
          width={30} height={30}/>
        </a>

        <a href="#">
          <Image src="/twitter.svg"
          alt='Twitter'
          width={30} height={30}/>
        </a>

        <a href="#">
          <Image src="/whatsapp.svg"
          alt='WhatsApp'
          width={26} height={26}/>
        </a>
      </div>
        <p>Made with Love by Bebie</p>
    </footer>
  )
}

export default Footer