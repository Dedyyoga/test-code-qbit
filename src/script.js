

// case 1
const buah = () => {
  let database = [
    {
      fruitId: 1,
      fruitName: "Apel",
      fruitType: "IMPORT",
      stock: 10,
    },
    {
      fruitId: 2,
      fruitName: "Kurma",
      fruitType: "IMPORT",
      stock: 20,
    },
    {
      fruitId: 3,
      fruitName: "apel",
      fruitType: "IMPORT",
      stock: 50,
    },
    {
      fruitId: 4,
      fruitName: "Manggis",
      fruitType: "LOCAL",
      stock: 100,
    },
    {
      fruitId: 5,
      fruitName: "Jeruk Bali",
      fruitType: "LOCAL",
      stock: 10,
    },
    {
      fruitId: 5,
      fruitName: "KURMA",
      fruitType: "IMPORT",
      stock: 20,
    },
    {
      fruitId: 5,
      fruitName: "Salak",
      fruitType: "LOCAL",
      stock: 150,
    },
  ];
  //map data
  let newArr = database.map((list) => ({
    buahId: list.fruitId,
    namaBuah: list.fruitName,
    tipeBuah: list.fruitType,
    stock: list.stock,
  }));

  // soal 1
  /*Buah apa saja yang dimiliki Andi? (fruitName)
  filter soal
  1.buah yg dimiliki andi apa saja
  */
  let buahPemilik = newArr.map((pemilik) => pemilik.namaBuah);
  let pemilik = "andi";
  console.log(`${pemilik} memiliki buah ${buahPemilik}`);

  // soal 2
  /*Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
   (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
   masing-masing wadah? 
   filter soal
   1.jadi andi mau mempisahkan buah local dan import
   2.wadah dibagi menjadi 2 
   3.dua wadah tersebut, buah apa saja ada
   */
  let local = newArr.filter((tipe) => tipe.tipeBuah === "LOCAL");
  let imPort = newArr.filter((tipe) => tipe.tipeBuah === "IMPORT");
  let data = [
    {
      wadahLocal: local.map((local) => local.namaBuah),
    },
    {
      wadahImport: imPort.map((Import) => Import.namaBuah),
    },
  ];
  console.log(
    `${pemilik} memisahkan buah untuk di wadah local ada buah ${data.map(
      (Local) => Local.wadahLocal
    )} dan wadah import ada buah ${data.map(
      (Import) => Import.wadahImport
    )}. ${pemilik} memerlukan wadah ${data.map((wadah) => wadah).length}
    `
  );

  //soal 3
  /*Berapa total stock buah yang ada di masing-masing wadah?
    filter soal
    1. menghitung semua total buah yang ada
    */
  let stockBuah = newArr
    .map((stok) => stok.stock)
    .reduce((prev, next) => prev + next);

  console.log(`total stock buah ${pemilik} adalah ${stockBuah}`);

  //soal 4
  /* Apakah ada komentar terkait kasus di atas?
     jawaban 
     ada karena kesalahan text / pemasukan data ke database. 
     kenapa Apel id 1 sama apel id 3 di bedakan? harus nya database ada Apel cuma 1 
     dan kurma juga harusnya sama  
     bisa jadi apel id 3 itu kesalahan ketik / pemasukan data
     
  */
  console.log(newArr);
};

const komentar = () => {
  let database = [
    {
      commentId: 1,
      commentContent: "Hai",
      replies: [
        {
          commentId: 11,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 111,
              commentContent: "Haai juga hai jugaa",
            },
            {
              commentId: 112,
              commentContent: "Haai juga hai jugaa",
            },
          ],
        },
        {
          commentId: 12,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 121,
              commentContent: "Haai juga hai jugaa",
            },
          ],
        },
      ],
    },
    {
      commentId: 2,
      commentContent: "Halooo",
    },
  ];
  let newArr = database.map((chat) => ({
    commentId: chat.commentId,
  }));

  // case 2
  // let balas = database.map((chat) => {
  //   let a = chat.replies;

  //   let newArr = a.filter((id) => ({
  //     commentId:id.commentId
  //   }))
  //   console.log(a)
  //   console.log(newArr)
  // });

  console.log(newArr);
  // console.log(balas);
};
console.log(komentar());
console.log(buah());
