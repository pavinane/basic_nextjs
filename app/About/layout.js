
export const metadata = {
  title: 'About',
  description: 'About us',
}

export default function RootLayout({ children }) {
  return (
    <div>
      <div>
        <h1>About Us Nav Bar</h1>
        {children}
      </div>
    
    </div>
  );
}
