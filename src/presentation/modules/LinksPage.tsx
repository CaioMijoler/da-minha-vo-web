import { SOCIAL_LINKS, PHOTOS } from '@/shared/constants/mockData';

export function LinksPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <header style={{ marginBottom: '30px' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccc', margin: '0 auto 15px' }}></div>
        <h1>Meu Portfólio</h1>
        <p>Confira minhas fotos e entre em contato!</p>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
        {SOCIAL_LINKS.map((link) => (
          <a 
            key={link.platform} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'block', padding: '14px', borderRadius: '8px', backgroundColor: '#0070f3', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            {link.label}
          </a>
        ))}
      </section>

      <section>
        <h2 style={{ marginBottom: '20px' }}>Galeria de Fotos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {PHOTOS.map((photo) => (
            <img 
              key={photo.id} 
              src={photo.url} 
              alt={photo.alt} 
              style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
