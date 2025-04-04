import '../styles/findus.scss'

export default function Schedule() {
  const Redirect = (): void => {
    window.open("https://wa.me/556492481831");
  };

  return (
    <>
      <div className='d'>
          <div className="a">
            Agende conosco uma consulta para melhor te atendermos!
          </div>
           <div className='b'>
              <button className='bt' onClick={Redirect}>
                  <img src="/whatsapp.png" className='img_shcedule'/>
                  Nossa whatsapp
              </button>
          </div>
      </div>
      <div className='c'>
           <img src="/agendamento.png" className='img2' />
      </div>
    </>
  );
}