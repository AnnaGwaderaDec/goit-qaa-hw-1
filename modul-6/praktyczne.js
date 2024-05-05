//////////////////////////ZROZUMIENIE KONCEPCJI

//this to słowo kluczowe (zmienna) które wskazuje aktualny kontekst wykonania 
//funkji. jest bezpośrednio związane z obiektem w kórym jest uzyte - wartość this 
//zależy od miejsca w którym jest wykorzystane. Wartosc kontekstu wewnątrz funkcji (nie strzałkowej) 
//jest okreslana w momencje jej wwywołania a nie tworzenia!





////////////////////////ZASTOSOWANIE PRAKTYCZNE

const maciej = { //obiekt (11-16)
    username: "Maciej", //właściwość obiektu wraz z jego zawartością
    showName() { //metoda obiektowa - nazwa
      console.log(this.username); //wyświetlenie właściwości username zadanego obiejktu, użyto z powodzeniem "this" bo metoda jest wywolywania w kontekscie obiektu maciej, więc this odnosi sie do tego obiektu 
    },
  };
  
  maciej.showName();//wywołanie metody 



///////////////////////////ROZSZERZONY PRZYKŁAD
const bookShelf = { //obiekt (23-31)
    authors: ["Jacek Dukaj", "Jarosław Grzędowicz"], //właściwosć authors przechowująca tablice autorów
    getAuthors() { //metoda - wyświetlanie autorów
      return this.authors; //użyto this, kóre ponownie odwołuje sie do kontekstu obiektu w którym jest wywoływane
    },
    addAuthor(authorName) { // metoda - dodawanie autorów
      this.authors.push(authorName); // metoda tablicowa push doodająca nowe dane do istniejącej tabeli; this odwouje sie do kontekstu obiektu w którym zostało wywołane
    },
  };
  
  console.log(bookShelf.getAuthors());
  bookShelf.addAuthor("Andrzej Sapkowski");
  console.log(bookShelf.getAuthors());
  