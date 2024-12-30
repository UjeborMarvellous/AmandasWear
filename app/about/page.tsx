import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <Image 
            src="/placeholder.svg?height=400&width=400" 
            alt="Colorful Ankara fabric" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Born from a passion for African heritage and contemporary fashion, AfriChic brings the vibrant world of Ankara to global wardrobes. Our journey began in the heart of West Africa, inspired by the rich tapestry of colors and patterns that define Ankara fabric.
          </p>
          <p>
            We believe that fashion is a powerful form of self-expression, and Ankara provides a canvas for telling uniquely African stories through clothing. Each piece in our collection is a celebration of culture, creativity, and craftsmanship.
          </p>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At AfriChic, our mission is to showcase the beauty and versatility of Ankara fabric to the world. We aim to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Promote African fashion and culture on a global stage</li>
          <li>Support local artisans and sustainable manufacturing practices</li>
          <li>Offer high-quality, stylish Ankara wear for every occasion</li>
          <li>Encourage cultural appreciation through fashion</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="mb-4">
          We are committed to ethical fashion. All our Ankara fabrics are sourced from reputable suppliers who uphold fair labor practices. We work closely with skilled tailors and designers to ensure each piece meets our high standards of quality and authenticity.
        </p>
        <p>
          Join us in celebrating the rich heritage of African fashion. With AfriChic, you're not just wearing clothes; you're wearing art, history, and culture.
        </p>
      </div>
    </div>
  )
}

