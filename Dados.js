let dados = [
    {
        titulo: "Acre",
        descricao: "O Acre, um estado brasileiro localizado na Região Norte, é um verdadeiro paraíso para os amantes da natureza e da aventura. Com uma rica biodiversidade e paisagens exuberantes, o estado oferece diversas opções para quem busca experiências únicas.",
        link: "https://www.bing.com/search?q=turismo+acre&cvid=aa8e6c1e9e3547359cfb6d1ec88fe4ac&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQgzOTA2ajBqNKgCCLACAQ&FORM=ANAB01&PC=LCTS",
        idh: 0.659,
        tag: "natureza, biodiversidade, aventura"
    },
    {
        titulo: "Alagoas",
        descricao: "Alagoas, um estado localizado na Região Nordeste do Brasil, é famoso por suas belas praias, rica cultura e história. Com uma costa exuberante e cidades históricas, Alagoas oferece aos visitantes uma experiência inesquecível. Explore as maravilhosas praias de Maceió, a capital, e descubra a história de Penedo, uma cidade colonial encantadora.",
        link: "https://www.guiadasemana.com.br/viagens-nacionais/galeria/lugares-para-conhecer-em-alagoas",
        populacao: "3.618.000",
        idh: 0.624,
        tag: "praias, cultura, história"
    },
    {
        titulo: "Amapá",
        descricao: "O Amapá, localizado na Região Norte do Brasil, é um estado com uma rica história e cultura. Conhecido por suas florestas exuberantes e manguezais, o Amapá oferece aos visitantes uma experiência única em contato com a natureza. Descubra suas belezas naturais, como a Ilha de Marajó e a Floresta Nacional do Amapá.",
        link: "https://todosdestinos.com/norte/amapa/5-atracoes-incriveis-para-visitar/",
        populacao: "877.000",
        idh: 0.663,
        tag: "florestas, manguezais, natureza"
    },
    {
        titulo: "Amazonas",
        descricao: "O Amazonas, o maior estado brasileiro, é um paraíso da biodiversidade mundial. Conhecido pela Floresta Amazônica, o estado oferece uma experiência única em contato com a natureza. Descubra a rica fauna e flora, os rios caudalosos e as comunidades tradicionais.",
        link: "https://www.mundoviajante.com/cidades-turisticas-do-amazonas/",
        populacao: "4.272.000",
        idh: 0.646,
        tag: "biodiversidade, Floresta Amazônica, comunidades tradicionais"
    },
    {
        titulo: "Bahia",
        descricao: "A Bahia, terra do acarajé e do Carnaval, é um estado rico em cultura, história e belezas naturais. Com praias paradisíacas, cidades históricas e uma culinária irresistível, a Bahia encanta a todos. Explore Salvador, a capital, e descubra a rica história da região.",
        link: "https://www.bing.com/search?q=turismo+bahia",
        populacao: "15.817.000",
        idh: 0.646,
        tag: "praias, carnaval, culinária"
    },
    {
        titulo: "Ceará",
        descricao: "O Ceará, conhecido por suas praias de águas cristalinas e dunas gigantescas, é um destino perfeito para quem busca sol e aventura. Fortaleza, a capital, oferece uma vida noturna agitada e diversas opções de lazer. Explore as belezas naturais do litoral cearense e descubra a cultura local.",
        link: "https://www.bing.com/search?q=turismo+ceara",
        populacao: "9.187.000",
        idh: 0.654,
        tag: "praias, dunas, vida noturna"
    },
    {
        titulo: "Espírito Santo",
        descricao: "O Espírito Santo é um estado com paisagens diversas, que vão desde praias paradisíacas até montanhas e cachoeiras. Vitória, a capital, é uma cidade moderna com uma vida cultural vibrante. Explore as belezas naturais do estado e descubra a história e a cultura capixaba.",
        link: "https://www.bing.com/search?q=turismo+espirito+santo",
        populacao: "4.140.000",
        idh: 0.741,
        tag: "praias, montanhas, cachoeiras"
    },
    {
        titulo: "Goiás",
        descricao: "Goiás é um estado com um rico patrimônio histórico e cultural. Cidades históricas como Goiás Velho e Pirenópolis oferecem aos visitantes a oportunidade de conhecer a arquitetura colonial e a tradição goiana. Explore as belezas naturais do estado e descubra a culinária típica.",
        link: "https://www.bing.com/search?q=turismo+goias",
        populacao: "7.184.000",
        idh: 0.692,
        tag: "história, arquitetura colonial, culinária"
    },
    {
        titulo: "Maranhão",
        descricao: "O Maranhão é um estado com uma rica história e cultura, marcada pela influência indígena e africana. São Luís, a capital, é um patrimônio histórico da humanidade e oferece aos visitantes uma experiência única. Explore as ilhas, os Lençóis Maranhenses e a culinária maranhense.",
        link: "https://www.bing.com/search?q=turismo+maranhao",
        populacao: "7.068.000",
        idh: 0.639,
        tag: "história, Lençóis Maranhenses, culinária"
    },
    {
        titulo: "Mato Grosso",
        descricao: "O Mato Grosso é um estado com grande diversidade natural, abrigando o Pantanal e a Amazônia Legal. Cuiabá é a capital e oferece diversas opções de turismo ecológico.",
        link: "https://hotelmt.com.br/blog/mato-grosso-destinos",
        populacao: "3.254.000",
        idh: 0.672,
        tag: "Pantanal, Amazônia Legal, turismo ecológico"
    },
    {
        titulo: "Mato Grosso do Sul",
        descricao: "O Mato Grosso do Sul é um estado com grande potencial turístico, combinando belezas naturais e cultura rica. Campo Grande, a capital, oferece diversas opções de lazer e entretenimento. Explore o Pantanal, as cidades históricas e a culinária regional.",
        link: "https://www.viagensecaminhos.com/mato-grosso-do-sul/",
        populacao: "2.669.000",
        idh: 0.701,
        tag: "Pantanal, cidades históricas, culinária"
    },
    {
        titulo: "Minas Gerais",
        descricao: "Minas Gerais é um estado histórico e culturalmente rico, com cidades coloniais bem preservadas, culinária saborosa e paisagens montanhosas. Ouro Preto, Diamantina e Tiradentes são alguns dos destinos mais visitados. Explore as cachoeiras, os museus e a rica gastronomia mineira.",
        link: "https://www.guiadasemana.com.br/viagens-nacionais/galeria/lugares-para-conhecer-em-minas-gerais",
        populacao: "21.222.000",
        idh: 0.736,
        tag: "cidades coloniais, gastronomia, cachoeiras"
    },
    {
        titulo: "Pará",
        descricao: "O Pará é um estado com uma natureza exuberante, abrigando a maior parte da Floresta Amazônica. Belém, a capital, é um portal para a Amazônia, oferecendo uma rica cultura e gastronomia. Explore a ilha do Marajó, o Parque Nacional dos Lençóis Maranhenses e a culinária paraense.",
        link: "https://guiaviajarmelhor.com.br/10-destinos-incriveis-para-conhecer-no-estado-do-para/",
        populacao: "8.224.000",
        idh: 0.629,
        tag: "Floresta Amazônica, ilha do Marajó, gastronomia"
    },
    {
        titulo: "Paraíba",
        descricao: "A Paraíba é um estado com praias paradisíacas, história rica e cultura vibrante. João Pessoa, a capital, é conhecida como a 'Suíça Brasileira'. Explore as praias de Cabo Branco e Tambaba, a história de Guarabira e a culinária paraibana.",
        link: "https://blogdeviagemeturismo.com.br/pontos-turisticos-da-paraiba/",
        populacao: "4.223.000",
        idh: 0.639,
        tag: "praias, cultura, culinária"
    },
    {
        titulo: "Paraná",
        descricao: "O Paraná é um estado com grande diversidade natural, com serras, rios e praias. Curitiba, a capital, é conhecida por sua arquitetura e planejamento urbano. Explore as Cataratas do Iguaçu, o Parque Nacional do Iguaçu e o litoral paranaense.",
        link: "https://www.queroviajarmais.com/lugares-para-viajar-no-parana/",
        populacao: "11.118.000",
        idh: 0.747,
        tag: "Cataratas do Iguaçu, arquitetura, litoral"
    },
    {
        titulo: "Pernambuco",
        descricao: "Pernambuco é um estado com rica história e cultura, famoso pelas suas praias, carnaval e a cidade do Recife. Explore o centro histórico de Olinda, as praias de Porto de Galinhas e a culinária pernambucana.",
        link: "https://caminhosmelevem.com/pernambuco-pontos-turisticos/",
        populacao: "9.622.000",
        idh: 0.662,
        tag: "praias, carnaval, história"
    },
    {
        titulo: "Piauí",
        descricao: "O Piauí é um estado com paisagens deslumbrantes, como as dunas do Delta do Parnaíba e as serras da Capivara. Teresina, a capital, oferece uma mistura de modernidade e tradição. Explore as cachoeiras, os parques nacionais e a culinária piauiense.",
        link: "https://deltarioparnaiba.com.br/10-pontos-turisticos-do-piaui/",
        populacao: "3.404.000",
        idh: 0.617,
        tag: "dunas, parques nacionais, culinária"
    },
    {
        titulo: "Rio de Janeiro",
        descricao: "O Rio de Janeiro é um estado conhecido mundialmente por suas belezas naturais, como o Cristo Redentor e as praias de Copacabana e Ipanema. Rio de Janeiro, a capital, é um centro cultural e oferece uma vida noturna vibrante.",
        link: "https://www.guiaviajarmelhor.com.br/destinos-turisticos-no-rio-de-janeiro/",
        populacao: "18.542.000",
        idh: 0.759,
        tag: "Cristo Redentor, praias, vida noturna"
    },
    {
        titulo: "Rio Grande do Norte",
        descricao: "O Rio Grande do Norte é um estado com lindas praias e dunas, incluindo as famosas dunas de Genipabu. Natal, a capital, é conhecida por seu sol o ano inteiro e suas atrações naturais. Explore as praias e o Parque das Dunas.",
        link: "https://www.festivaldecarnaval.com/rio-grande-do-norte/",
        populacao: "3.672.000",
        idh: 0.665,
        tag: "praias, dunas, sol"
    },
    {
        titulo: "Rio Grande do Sul",
        descricao: "O Rio Grande do Sul é um estado com uma rica herança cultural, influenciada pela imigração europeia. Porto Alegre, a capital, é conhecida por sua vida cultural e gastronômica. Explore as cidades históricas, os vinhedos e a culinária típica.",
        link: "https://www.turismorgs.com.br/15-pontos-turisticos-do-rio-grande-do-sul/",
        populacao: "11.381.000",
        idh: 0.752,
        tag: "herança cultural, vinhedos, gastronomia"
    },
    {
        titulo: "Rondônia",
        descricao: "Rondônia é um estado localizado na Região Norte do Brasil, conhecido por suas florestas e rios. Porto Velho, a capital, oferece um contato direto com a natureza e a rica cultura local. Explore o Parque Nacional de Pacaás Novos e a biodiversidade da região.",
        link: "https://www.turismorondonia.com.br/15-pontos-turisticos-em-rondonia/",
        populacao: "2.032.000",
        idh: 0.670,
        tag: "florestas, rios, biodiversidade"
    },
    {
        titulo: "Roraima",
        descricao: "Roraima é o estado brasileiro mais ao norte e oferece uma experiência única na Amazônia. Boa Vista, a capital, é a porta de entrada para explorar a rica biodiversidade e as culturas indígenas da região.",
        link: "https://roraima.tur.br/dicas-turisticos-em-roraima/",
        populacao: "629.000",
        idh: 0.665,
        tag: "Amazônia, biodiversidade, culturas indígenas"
    },
    {
        titulo: "Santa Catarina",
        descricao: "Santa Catarina é um estado com uma rica herança cultural e uma diversidade de paisagens, desde praias até montanhas. Florianópolis, a capital, é conhecida por suas praias e vida noturna vibrante. Explore as cidades históricas e as belezas naturais do estado.",
        link: "https://www.pontosturisticos.com.br/santa-catarina/",
        populacao: "7.248.000",
        idh: 0.773,
        tag: "praias, montanhas, vida noturna"
    },
    {
        titulo: "São Paulo",
        descricao: "São Paulo é o estado mais populoso e economicamente desenvolvido do Brasil. São Paulo, a capital, é um centro financeiro e cultural com uma vida vibrante. Explore a cidade, suas atrações culturais e o interior do estado.",
        link: "https://www.guiadasemana.com.br/viagens-nacionais/galeria/lugares-para-conhecer-em-sao-paulo",
        populacao: "46.321.000",
        idh: 0.783,
        tag: "centro financeiro, cultura, atrações"
    },
    {
        titulo: "Sergipe",
        descricao: "Sergipe é o menor estado do Brasil, mas oferece muitas belezas naturais e culturais. Aracaju, a capital, é conhecida por suas praias e gastronomia. Explore as praias, as cidades históricas e a rica cultura sergipana.",
        link: "https://www.queroviajarmais.com/pontos-turisticos-em-sergipe/",
        populacao: "2.430.000",
        idh: 0.658,
        tag: "praias, gastronomia, cultura"
    },
    {
        titulo: "Tocantins",
        descricao: "Tocantins é um estado com belezas naturais únicas, incluindo o Jalapão, um deserto com dunas e lagoas. Palmas, a capital, é o ponto de partida para explorar o estado. Descubra a rica biodiversidade e as atrações naturais da região.",
        link: "https://www.destinosinteligentes.com.br/tocantins-pontos-turisticos/",
        populacao: "1.794.000",
        idh: 0.688,
        tag: "Jalapão, dunas, lagoas"
    }
];


