import '../styles/findus.scss'

export default function FindUs() {
    const Redirect = (): void => {
        window.open("https://maps.app.goo.gl/MiSiCGs1ik6JfZPy7");
      };
    
    return (
        <>
            <div className='d'>
                <div className="a">
                    Onde nos encontrar ?
                </div>
                 <div className='b'>
                    <button className='bt' onClick={Redirect}>
                        <img src="/pino.png" className='img'/>
                        Nossa localização
                    </button>
                </div>
            </div>
            <div className='c'>
                 <img src="/clinica.png" className='img2' />
            </div>
        </>
    );
}