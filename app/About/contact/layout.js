
export const metadata = {
  title: 'Contact',
  description: 'Contact us',
}

export default function RootLayout({ children }) {
  return (
    <div>
      <div>
        <h1>Contact us NavBar</h1>
        {children}
      </div>
    
    </div>
  );
}
