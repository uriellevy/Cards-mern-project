import { Footer } from 'flowbite-react'

const FooterComponent = () => {
    return (
        <Footer container className='fixed bottom-0 left-0' style={{borderTop: "2px solid #fff"}}>
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <Footer.LinkGroup>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    )
}

export default FooterComponent