document.addEventListener('DOMContentLoaded', function () {
    // Dummy card data with image URLs, names, and rarities
    let cards = [
                //rare cards
                { id: 1, name: 'Charizard Gold Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.ebayimg.com/images/g/90YAAOSwapNlAGRh/s-l1600.jpg' },
                { id: 2, name: 'Shellder Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.pinimg.com/474x/85/84/b1/8584b125576207409c5c41889b8bc469.jpg' },
                { id: 3, name: 'Good Manners Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGA_n-54AWkLNvvR0dmprIgvm-yVs4T2GMspz3VzRibA&s' },
                { id: 4, name: 'PalkiaX Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.pinimg.com/236x/76/bb/70/76bb7006431ddfbd07233edf002942d3.jpg' },
                { id: 5, name: 'Salandit Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.pinimg.com/236x/81/79/c1/8179c16e8fe0b80c9488b4a164a2e5b1.jpg' },
                { id: 6, name: 'Wimpod Card', rarity: 'Rare', price: 5, imageUrl: 'https://pokemoncards.com.au/wp-content/uploads/2019/08/wimpod-16-147-common_5d525585296f9.jpeg' },
                { id: 7, name: 'Dragonair Card', rarity: 'Rare', price: 5, imageUrl: 'https://tcgplayer-cdn.tcgplayer.com/product/42358_200w.jpg' },
                { id: 8, name: 'Jigglypuff Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.ebayimg.com/images/g/I5wAAOSw3OtgZP6m/s-l1200.webp' },
                { id: 9, name: 'Flower Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOf0t-vKNsYtIWTSimf7kD5MgJOi8UwLW3P9aJ6OlFw&s' },
                { id: 10, name: 'Piplup Card', rarity: 'Rare', price: 5, imageUrl: 'https://www.hillscards.co.uk/images/pokemon-trading-card-game-035-172-piplup-common-card-swsh-09-brilliant-stars-p68860-121133_image.jpg' },
                { id: 11, name: 'Zigzagoon Card', rarity: 'Rare', price: 5, imageUrl: 'https://kawaiicollector.com.au/cdn/shop/products/SWSH-BASE-SET-117_580x.jpg?v=1585819228' },
                { id: 12, name: 'Gothita Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.ebayimg.com/images/g/gGIAAOSwghtfNWRQ/s-l1200.webp' },
                { id: 13, name: 'Shuckle Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.pinimg.com/474x/eb/f6/ef/ebf6efd1908262b941c528802bf0a209.jpg' },
                { id: 14, name: 'Vibrava Card', rarity: 'Rare', price: 5, imageUrl: 'https://pokemoncards.com.au/wp-content/uploads/2019/07/vibrava-38-70-common_5d3f969a8e345.jpeg' },
                { id: 15, name: 'Lapras Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.pinimg.com/474x/16/d8/ef/16d8ef0c0f120becd7ca72633e032931.jpg' },
                { id: 16, name: 'Eye Energy Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.ebayimg.com/thumbs/images/g/XUgAAOSwvq9l7oW8/s-l640.jpg' },
                { id: 17, name: 'Ultra G-Man Toilet Vmax Card', rarity: 'Rare', price: 5, imageUrl: 'https://preview.redd.it/i-made-skibidi-toilet-pokemon-cards-let-me-now-what-to-do-v0-j6abyvtg337b1.jpg?width=640&crop=smart&auto=webp&s=97effe97bd6ca66760fb29a15b660e4a275b437f' },
                { id: 18, name: 'Skibidi Toilet Card', rarity: 'Rare', price: 5, imageUrl: 'https://www.mypokecard.com/en/Gallery/my/galery/i8i4vjfOfcTg.jpg' },
                { id: 19, name: 'Claw Skibidi Toilet Card', rarity: 'Rare', price: 5, imageUrl: 'https://www.mypokecard.com/en/Gallery/my/galery/T7iOp3YCsehF.jpg' },
                { id: 20, name: 'Basic Energy Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPc98wrWMtYVit9377mnvu-JNodHS5SnVtVn4MMJ0qg&s' },
                { id: 21, name: 'Cubone Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.pinimg.com/236x/e3/4a/b3/e34ab393e817b1ecb4e083c409cbf446.jpg' },
                { id: 22, name: 'Professor Oak Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.ebayimg.com/images/g/Z~gAAOSwUIRfZiIa/s-l1200.jpg' },
                { id: 23, name: 'Mail From Bill Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.ebayimg.com/images/g/aFUAAOSwlFli95hY/s-l1600.jpg' },
                { id: 24, name: 'Bill Card', rarity: 'Rare', price: 5, imageUrl: 'https://tcgplayer-cdn.tcgplayer.com/product/107088_200w.jpg' },
                { id: 25, name: 'Kabuto Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwT-YY4Oo_xBK0hMT4dWbcZP5asJOyJ6N-kQ&s' },
                { id: 26, name: 'Bibarel Card', rarity: 'Rare', price: 5, imageUrl: 'https://www.trainerhub.net.au/assets/full/GO-060-P.png?20230620180458' },
                { id: 27, name: 'Yungood Card', rarity: 'Rare', price: 5, imageUrl: 'https://pokemoncards.com.au/wp-content/uploads/2019/07/yungoos-112-156-common_5d3fb9364fc6f.jpeg' },
                { id: 28, name: 'Throh Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFfFzrLjLICz3Zgam0Wz6YLUCU5d_mFQKeBpGLshw3A&s' },
                { id: 29, name: 'Popplio Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11Jr-nWINxFsLkDtUCjgf9yzLmdbhO_tWfi9VsWLvBw&s' },
                { id: 30, name: 'Energy Card', rarity: 'Rare', price: 5, imageUrl: 'https://tcgplayer-cdn.tcgplayer.com/product/90525_200w.jpg' },
                { id: 31, name: 'Castform Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCW5iK2NhTrGRLQXJgngJ4JaLm0RJW_pfJFYiflxUkg&s' },
                { id: 32, name: 'Silicobra Card', rarity: 'Rare', price: 5, imageUrl: 'https://thepoketradeemporium.com/cdn/shop/products/IMG_1684.jpg?v=1680104326' },
                { id: 33, name: 'Charmander Card', rarity: 'Rare', price: 5, imageUrl: 'https://www.parsehub.com/blog/content/images/2020/12/mos-expensive-common-card.jpg' },
                { id: 34, name: 'Bidoof Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJBzSt5k7RXoNDDaDRO6Iy1_rnkNvseEF3e8rA6mgEg&s' },
                { id: 35, name: 'Chikorite Card', rarity: 'Rare', price: 5, imageUrl: 'https://i.ebayimg.com/images/g/NZwAAOSwlD5eds2A/s-l1200.webp' },
                { id: 36, name: 'Totodile Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzq9LN1r-LAKrFjPqRmQ1F7Aacx0lLwyRbQ6D7kazk7w&s' },
                { id: 37, name: 'Pikachu Card', rarity: 'Rare', price: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzq9LN1r-LAKrFjPqRmQ1F7Aacx0lLwyRbQ6D7kazk7w&s' },
                { id: 38, name: 'Caterpie Card', rarity: 'Rare', price: 5, imageUrl: 'https://tcgplayer-cdn.tcgplayer.com/product/107042_200w.jpg' },
        
                //super rare cards
                { id: 39, name: 'Net Ball Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZL2DHpOHhCnQfYTiahBBoW4oaoDtMRuN0jv1_HTJNoTHCXESTPePto5UkSs3dNL1lZNU&usqp=CAU' },
                { id: 40, name: 'Ultra Ball Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XaCVxU9Js3LokdXHtWK-sjPpNEOi1cs_9Vw_b516EaicCi83VrFKcNO0yxzQ07DzO_Q&usqp=CAU' },
                { id: 41, name: 'Blastois Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://i.ebayimg.com/thumbs/images/g/mPQAAOSwWt9lFqvt/s-l640.jpg' },      
                { id: 42, name: 'PidgeonEx Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://tcgplayer-cdn.tcgplayer.com/product/535559_200w.jpg' },
                { id: 43, name: 'Esprtha Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AZBtlN-KYLVcz6cS7pfsmPlooHkTh8O0L6N4agP9bA&s' },
                { id: 44, name: 'Marnie Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeeG67Xm9lSUXrTszJJHWn-Ur9LW49NwhLz02ZIp2FMBtvmPcRuNjevCthQRqQwOoST00&usqp=CAU' },
                { id: 45, name: 'Eevee Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://tcgplayer-cdn.tcgplayer.com/product/197811_200w.jpg' },
                { id: 46, name: 'Japan Pokemon Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://i.ebayimg.com/images/g/lGsAAOSw1tFiqw5k/s-l1200.webp' },
                { id: 47, name: 'Gyarados Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://cf.shopee.ph/file/5d96db774582a3009b84afd4be674b1c' },
                { id: 48, name: 'Light Dragonite Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://www.wargamer.com/wp-content/sites/wargamer/2024/04/pokemon-trading-card-game-rare-dragonite-pokemon-cards-light-dragonite.jpg' },
                { id: 49, name: 'Iron BoulderEx Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://tcgplayer-cdn.tcgplayer.com/product/542938_200w.jpg' },
                { id: 50, name: 'Umbreon Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f116775d-36f8-4edf-b5e0-0a9f93a28b1f/dbiov4l-0cec9f83-be6a-4e88-8463-3d98154c7ad5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxMTY3NzVkLTM2ZjgtNGVkZi1iNWUwLTBhOWY5M2EyOGIxZlwvZGJpb3Y0bC0wY2VjOWY4My1iZTZhLTRlODgtODQ2My0zZDk4MTU0YzdhZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.stDtj1dqT2Gws7LYJ-mgK1TtdurgRNiVRVGrKXWBTfw' },
                { id: 51, name: 'Shadow Pikachu Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgu0vob94Xxk3bgrS_G3rKWbax73mSHryTg_KV02826-_ryAUrCfSYqhvaxjnJA5i2A4&usqp=CAU' },
                { id: 52, name: 'Magcargo Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://images.squarespace-cdn.com/content/v1/5cf4cfa4382ac0000123aa1b/1711069421334-1J4HN81MCN2TR1R8OG8P/SV05_EN_29-2x.png' },
                { id: 53, name: 'Marowak Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_105.png' },
                { id: 54, name: 'Kindler Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://i.ebayimg.com/images/g/sc0AAOSwpcVjiV0u/s-l1200.jpg' },
                { id: 55, name: 'Arezu Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhUC5sLewTPbtC9ljwWhsRUYhBg8--X40FqEPP3VZAMvZLBk4xBYa2Jq9RjUtwD6AVcQ&usqp=CAU' },
                { id: 56, name: 'Raging BoltEx Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SV05/SV05_EN_218.png' },
                { id: 57, name: 'Walking Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/temporal-forces/en-us/SV05_EN_50.png' },
                { id: 58, name: 'Rare Candy Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwkBdyb3NECQpNc2WG3uZeo20g65ZBeN7zE74X3RYvFfogWj5gitnyQjI811jj_Hx1i4&usqp=CAU' },
                { id: 59, name: 'Coalossal Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://cdn9.mavin.io/production/soldItems/204936458/images/image-0.jpg' },
                { id: 60, name: 'Regirock Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://www.mypokecard.com/en/Gallery/my/galery/mndmjvh1Ytfk.jpg' },
                { id: 61, name: 'Nacli Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7JzQTSuQ6wAfUV9Wdf1gYJde57Vh2p2QlGP355E2tg-DyPTMswAFA9fWrigby0B8ub4&usqp=CAU' },
                { id: 62, name: 'Pineco Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://tcgplayer-cdn.tcgplayer.com/product/534470_200w.jpg' },
                { id: 63, name: 'Goku Ultra Card', rarity: 'Super Rare', price: 25, imageUrl: 'https://pokecardmaker.com/wp-content/uploads/2022/11/pokecardmaker-card-goku-ultra-extinct-poke-card.png' },
        
                //epic cards
                { id: 64, name: 'Squirtle Card', rarity: 'Epic', price: 50, imageUrl: 'https://tcgplayer-cdn.tcgplayer.com/product/502549_200w.jpg' },
                { id: 65, name: 'Adaman Card', rarity: 'Epic', price: 50, imageUrl: 'https://www.cardcaverntradingcards.com/cdn/shop/files/adaman-hyper-rare-199-189-astral-radiance_600x.png?v=1688573617' },
                { id: 66, name: 'CharizardEx Card', rarity: 'Epic', price: 50, imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/paldean-fates/en-us/SV4pt5_EN_234.png' },
                { id: 67, name: 'Vstar Card', rarity: 'Epic', price: 50, imageUrl: 'https://m.media-amazon.com/images/I/71x6QsZ1TwL._AC_UF894,1000_QL80_.jpg' },
                { id: 68, name: 'Pikachu Card ', rarity: 'Epic', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZuEwQ4u03KjLNG_Uro2ZQ3bZShNtMg8y-B58rS9jVg&s' },
                { id: 69, name: 'Charisard Card', rarity: 'Epic', price: 50, imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/07/Chari1-b7acc3e.jpg?quality=90&fit=700,933' },
                { id: 70, name: 'Bulbsor Card', rarity: 'Epic', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1Jfb1rOxL4Vwpm84SeW2PhDPsyA9BtjrAFDcJ_-erA&s' },
                { id: 71, name: 'Mew2 Card', rarity: 'Epic', price: 50, imageUrl: 'https://www.mypokecard.com/en/Gallery/my/galery/iUImPELubhg.jpg' },
                { id: 72, name: 'Towa Card', rarity: 'Epic', price: 200, imageUrl: 'https://s3.eu-west-1.amazonaws.com/cdn.webfactore.co.uk/sr_1514720_largeish.jpg?t=1710015893' },
                { id: 73, name: 'Chandra Card', rarity: 'Epic', price: 200, imageUrl: 'https://accidentallycoolgames.com/cdn/shop/products/c7bbb911-9de2-455d-9677-e1004db65dbd_large.jpg?v=1597008217' },
                { id: 74, name: 'intelion Card', rarity: 'Epic', price: 200, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcvPRyHM3Xyn-c72vvFc6CgEfWlCShg2GNQ&s' }, //used to be ageni
                { id: 75, name: 'Dark Unicorn Card', rarity: 'Epic', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxMZ6uZUPEdV6wKpb60sox-BFYkV2QNr3X0YXBlQGgg&s' },
                { id: 76, name: 'Yonder Card', rarity: 'Epic', price: 50, imageUrl: 'https://i.ebayimg.com/images/g/N6EAAOSwzf1fMH8l/s-l1200.jpg' },
                { id: 77, name: 'Witch Card', rarity: 'Epic', price: 50, imageUrl: 'https://wiki.dominionstrategy.com/images/thumb/f/f3/Witch.jpg/200px-Witch.jpg' },
                { id: 78, name: 'Dark Prince Card', rarity: 'Epic', price: 50, imageUrl: 'https://static.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest/smart/width/250/height/250?cb=20171212210526' },
                { id: 79, name: 'Prince Card', rarity: 'Epic', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGYpS5GhXac6p7SW_aqITjcTE-mVLuNmHf7vxBWLYrQ&s' },
                { id: 80, name: 'Baby Dragon Card', rarity: 'Epic', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLxaVeVkICPwLeTpd15belUlRoNtvGrnwupyQoC1ElQ&s' },
                { id: 81, name: 'Paka Card', rarity: 'Epic', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzY8GfJ6mBgW3fVm8yPLb7j639xLLy5fSeHRVjtzcC8Q&s' },
                { id: 82, name: 'Duck Card', rarity: 'Epic', price: 50, imageUrl: 'https://tr.rbxcdn.com/ed9043140f37062b3a44b44ac07a5f27/420/420/Hat/Png' },
                { id: 83, name: 'Charles Card', rarity: 'Epic', price: 50, imageUrl: 'https://www.hillscards.co.uk/images/yu-gi-oh-trading-card-game-dune-en072-the-continuing-epic-of-charles-common-card-1st-edition-p74862-140084_image.jpg' },
        
                //mythic cards
                { id: 84, name: 'emergency powers Card', rarity: 'Mythic', price: 200, imageUrl: 'https://pic.ebid.net/upload_big/0/6/0/uo_1627348368-21727-21.jpg' },
                { id: 85, name: 'Gogeta Card', rarity: 'Mythic', price: 200, imageUrl: 'https://totalcards.net/cdn/shop/files/dbzbt12-145.jpg?v=1711326287&width=535' },
                { id: 86, name: 'Kargen Card', rarity: 'Mythic', price: 200, imageUrl: 'https://assets.lastdodo.com/image/ld_thumb3/plain/assets/catalog/assets/2022/10/30/0/1/a/pdf_01a5f016-5888-11ed-98c8-806bdb66d51f.jpg' },
                { id: 87, name: 'Archons Glory', rarity: 'Mythic', price: 200, imageUrl: 'https://cards.scryfall.io/normal/front/e/7/e71768e7-4ef7-4fb2-838b-eb3a7f662d38.jpg?1692936296' },
                { id: 88, name: 'Muldrotha Card', rarity: 'Mythic', price: 200, imageUrl: 'https://tools.toywiz.com/_images/_webp/_products/lg/mysteryboosterthelistmuldrothathegravetide.webp' },
                { id: 89, name: 'Mythic Tree Dragon Card', rarity: 'Mythic', price: 200, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfJOdzRpJ3dxolOZ44wGXwTKvX7vPmi2gWbCViFa0Pw&s' },
                { id: 90, name: 'MewV Card', rarity: 'Mythic', price: 200, imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/mythical-squishy-premium-collection/slider/02.jpg' },
                { id: 91, name: 'Demonic Tutor Card', rarity: 'Mythic', price: 200, imageUrl: 'https://media.wizards.com/2021/stx/en_vguvAM0djy.png' },
                { id: 92, name: 'CelebiV Card', rarity: 'Mythic', price: 200, imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/mythical-squishy-premium-collection/slider/01.jpg' },
                { id: 93, name: 'Lord Xander Card', rarity: 'Mythic', price: 200, imageUrl: 'https://tools.toywiz.com/_images/_webp/_products/lg/mtgstreetsofnewcapenna197lordxandertheco.webp' },
                { id: 94, name: 'Water Dragon Card', rarity: 'Mythic', price: 200, imageUrl: 'https://www.hillscards.co.uk/images/yu-gi-oh-trading-card-game-yu-gi-oh-mythic-water-dragon-mp14-en135-1st-edition-p34308-39697_medium.jpg' },
                { id: 95, name: 'VictinV Card', rarity: 'Mythic', price: 200, imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/mythical-squishy-premium-collection/slider/03.jpg' },
        
                //legendry cards
                { id: 96, name: 'Batman 9 PSA Card', rarity: 'Legendary', price: 500, imageUrl: 'https://i.psacard.com/cardfacts/1966-batman-1-the-batman-57081.jpg?h=1000' },
                { id: 97, name: 'Glenn Rhee Signed Card', rarity: 'Legendary', price: 500, imageUrl: 'https://i.ebayimg.com/images/g/~WoAAOSwux5YKUwu/s-l1200.webp' },
                { id: 98, name: 'Carl Grimes 10 PSA Card', rarity: 'Legendary', price: 500, imageUrl: 'https://i.ebayimg.com/images/g/ah4AAOSwb5Vkjfb0/s-l1600.jpg' },
                { id: 99, name: 'Rick Grimes 8.5 PSA Card', rarity: 'Legendary', price: 500, imageUrl: 'https://i.psacard.com/cardfacts/2011-cryptozoic-entertainment-the-walking-dead---season-1-2-rick-grimes-55948.jpg?h=1000' },
                { id: 100, name: 'The Flash 10 PSA Card', rarity: 'Legendary', price: 500, imageUrl: 'https://i.ebayimg.com/images/g/N10AAOSw5OJlDQTk/s-l400.jpg' },
        
                //dev card
                { id: 101, name: 'Negan 9 PSA Dev Card!!', rarity: 'Dev', price: 100000, imageUrl: 'https://d1w8cc2yygc27j.cloudfront.net/-6287972473526969425/-494203325660746684.jpg' },
                { id: 102, name: 'Michael Jordan Signed 10 PSA Dev Card!!', rarity: 'Dev', price: 100000, imageUrl: 'https://www.sportscollectorsdaily.com/wp-content/uploads/2020/08/Star-Company-Michael-Jordan-rookie-card-autographed.jpg' }
 ];


    let userInventory = [];
    let tags = [];
    let balance = 150; // Initial balance
    let ismillionr = 0;
    let level = 1;
    let xp = 0;
    let totalEarnings = 0;
    let achievements = {
        "Collector I": false,
        "Collector II": false,
        "Collector III": false,
        "Collector IV": false,
        "Collector V": false,
        "Master Of The Cards": false,
        "All Legendary Cards": false,
        "Two Dev Cards": false,
        "First Purchase": false
    };
    const buyTagButton = document.getElementById('buy-tag-btn');
    const tagsList = document.getElementById('tags-list');
    const cardSelect = document.getElementById('card-select');
    const performTransactionBtn = document.getElementById('perform-transaction');
    const refreshMarketBtn = document.getElementById('refresh-market');
    const inventoryList = document.getElementById('inventory-list');
    const balanceAmount = document.getElementById('balance-amount');
    const notification = document.getElementById('notification');
    const buyAllButton = document.getElementById('buy-all-button');
    const sellAllButton = document.getElementById('sell-all-button');
    const achievementsList = document.getElementById('achievements-list');
    const achievementsProgressList = document.getElementById('achievements-progress-list');
    const editProfileBtn = document.getElementById('edit-profile-btn');

    // Function to display balance amount
    function renderBalance() {
        balanceAmount.textContent = balance;
    }

    // Function to update balance display
    function updateBalance(amount) {
        balance += amount;
        renderBalance();
    }

    // Function to update prices in the inventory based on changes in the market
    function updatePricesInInventory() {
        userInventory.forEach(inventoryCard => {
            const card = cards.find(card => card.id === inventoryCard.id);
            if (card) {
                inventoryCard.price = card.price;
            }
        });
        renderInventory();
    }

    // Function to display inventory and balance
    function renderInventory() {
        inventoryList.innerHTML = '';
        userInventory.forEach(card => {
            const li = document.createElement('li');
            const text = document.createTextNode(`${card.name} - Rarity: ${card.rarity} - $${card.price}`);
            li.appendChild(text);

            // Create a button for selling the item
            const sellButton = document.createElement('button');
            sellButton.textContent = 'Sell';
            sellButton.addEventListener('click', function() {
                performTransaction(card.id, 'sell', 1);
            });

            li.appendChild(sellButton);
            inventoryList.appendChild(li);
        });
    }

   // Function to render the profile view
   function renderProfileView() {
    const profileContainer = document.getElementById('profile-header');
    if (profileContainer) {
        // Add event listener for edit profile button
        const editProfileBtn = document.getElementById('edit-profile-btn');
        if (editProfileBtn) {
            editProfileBtn.addEventListener('click', function () {
                const newUsername = prompt('Enter your new username:', document.getElementById('username').textContent);
                if (newUsername !== null && newUsername !== '') {
                    document.getElementById('username').textContent = newUsername;
                }
            });
        } else {
            console.error('Edit Profile button not found.');
        }
    } else {
        console.error('Profile container not found.');
    }
}

    // Function to check and unlock achievements
    function checkAchievements() {
        // Achievement: Collector I
        if (!achievements['Collector I'] && userInventory.length >= 10) {
            unlockAchievement('Collector I');
        }
        // Achievement: Collector II
        if (!achievements['Collector II'] && userInventory.length >= 25) {
            unlockAchievement('Collector II');
        }
        // Achievement: Collector III
        if (!achievements['Collector III'] && userInventory.length >= 50) {
            unlockAchievement('Collector III');
        }
        // Achievement: Collector IV
        if (!achievements['Collector IV'] && userInventory.length >= 75) {
            unlockAchievement('Collector IV');
        }
        // Achievement: Collector V
        if (!achievements['Collector V'] && userInventory.length >= 100) {
            unlockAchievement('Collector V');
        }

        // Achievement: Master Of The Cards
        if (!achievements['Master Of The Cards']) {
            const totalCardsOwned = userInventory.length;
            const totalUniqueCards = new Set(userInventory.map(card => card.id)).size;
            if (totalUniqueCards === cards.length) {
                unlockAchievement('Master Of The Cards');
            }
        }

        // Achievement: All Legendary Cards
        if (!achievements['All Legendary Cards']) {
            const legendaryCards = cards.filter(card => card.rarity === 'Legendary');
            const totalLegendaryOwned = legendaryCards.filter(card => userInventory.some(invCard => invCard.id === card.id)).length;
            if (totalLegendaryOwned === legendaryCards.length) {
                unlockAchievement('All Legendary Cards');
            }
        }

        // Achievement: Two Dev Cards
        if (!achievements['Two Dev Cards']) {
            const devCardCount = userInventory.filter(card => card.rarity === 'Dev').length;
            if (devCardCount >= 2) {
                unlockAchievement('Two Dev Cards');
            }
        }

        // Achievement: First Purchase
        if (!achievements['First Purchase'] && userInventory.length > 0) {
            unlockAchievement('First Purchase');
        }
    }

    // Function to unlock and display an achievement
    function unlockAchievement(achievementName) {
        const achievementItem = document.createElement('li');
        achievementItem.textContent = achievementName;
        achievementItem.classList.add('achievement-item', 'unlocked');
        achievementsList.appendChild(achievementItem);
        alert(`Congratulations! You have unlocked the "${achievementName}" achievement!`);
        achievements[achievementName] = true;
        achievementItem.remove;
        // Update achievements progress display
        updateAchievementsProgress();
    }

    // Function to update achievements progress display
    function updateAchievementsProgress() {
        achievementsProgressList.innerHTML = '';

        // Filter out completed achievements
        const incompleteAchievements = Object.entries(achievements).filter(([achievement, completed]) => !completed);

        // Add incomplete achievement progress items
        incompleteAchievements.forEach(([achievement, completed]) => {
            let progress;
            if (achievement === 'Collector I' || achievement === 'Collector II' || achievement === 'Collector III' || achievement === 'Collector IV' || achievement === 'Collector V') {
                progress = getCollectorAchievementProgress(achievement);
            } else if (achievement === 'Master Of The Cards') {
                progress = getMasterOfTheCardsAchievementProgress();
            } else if (achievement === 'All Legendary Cards') {
                progress = getAllLegendaryCardsAchievementProgress();
            } else if (achievement === 'Two Dev Cards') {
                progress = getTwoDevCardsAchievementProgress();
            } else if (achievement === 'First Purchase') {
                progress = getFirstPurchaseAchievementProgress();
            }
            const achievementItem = document.createElement('li');
            achievementItem.textContent = `${achievement}: ${progress}`;
            achievementsProgressList.appendChild(achievementItem);
        });
    }

    // Function to get collector achievement progress
    function getCollectorAchievementProgress(achievementName) {
        const totalCardsOwned = userInventory.length;
        let targetCards;
        switch (achievementName) {
            case 'Collector I':
                targetCards = 10;
                break;
            case 'Collector II':
                targetCards = 25;
                break;
            case 'Collector III':
                targetCards = 50;
                break;
            case 'Collector IV':
                targetCards = 75;
                break;
            case 'Collector V':
                targetCards = 100;
                break;
            default:
                targetCards = 0;
                break;
        }
        return `${totalCardsOwned}/${targetCards}`;
    }

    // Function to get Master Of The Cards achievement progress
    function getMasterOfTheCardsAchievementProgress() {
        const totalCardsOwned = userInventory.length;
        const totalUniqueCards = new Set(userInventory.map(card => card.id)).size;
        return `${totalUniqueCards}/${cards.length}`;
    }

    // Function to get All Legendary Cards achievement progress
    function getAllLegendaryCardsAchievementProgress() {
        const legendaryCards = cards.filter(card => card.rarity === 'Legendary');
        const totalLegendaryOwned = legendaryCards.filter(card => userInventory.some(invCard => invCard.id === card.id)).length;
        return `${totalLegendaryOwned}/${legendaryCards.length}`;
    }

    // Function to get Two Dev Cards achievement progress
    function getTwoDevCardsAchievementProgress() {
        const devCardsOwned = userInventory.filter(card => card.rarity === 'Dev');
        const uniqueDevCardsOwned = new Set(devCardsOwned.map(card => card.id)).size;
        return `${uniqueDevCardsOwned}/2`;
    }


    // Function to get First Purchase achievement progress
    function getFirstPurchaseAchievementProgress() {
        return achievements.firstPurchase ? 'Completed' : 'Not yet';
    }

    // Function to perform transaction
    function performTransaction(selectedCardId, action, quantity = 1) {
        const selectedCard = cards.find(card => card.id === parseInt(selectedCardId));

        // Check if the user already has 5 legendary cards in their inventory
        const legendaryCount = userInventory.filter(card => card.rarity === 'Legendary').length;
        // Check if the user already has 2 dev cards in their inventory
        const devCount = userInventory.filter(card => card.rarity === 'Dev').length;

        if (action === 'buy') {
            if (selectedCard.rarity === 'Legendary' && legendaryCount + quantity > 5) {
                alert('You can only have up to 5 Legendary cards in your inventory!');
                return;
            } else if (selectedCard.rarity === 'Dev' && devCount + quantity > 2) {
                alert('You can only have up to 2 Dev cards in your inventory!');
                return;
            } else {
                const totalPrice = selectedCard.price * quantity;
                if (balance >= totalPrice) {
                    balance -= totalPrice;
                    for (let i = 0; i < quantity; i++) {
                        userInventory.push(selectedCard);
                    }
                    renderInventory();
                    renderBalance(); // Update balance after transaction
                    checkAchievements(); // Check achievements after transaction
                    const transactionXp = 10; // XP earned per transaction
                    const transactionEarnings = totalPrice; // Earnings per transaction
                    xp += transactionXp;
                    totalEarnings += transactionEarnings;
                    document.getElementById('xp').innerText = xp;
                    document.getElementById('total-earnings').innerText = totalEarnings;
                    checkLevelUp();
                } else {
                    alert('Insufficient balance to buy this card!');
                    return;
                }
            }
        } else if (action === 'sell') {
            const index = userInventory.findIndex(card => card.id === parseInt(selectedCardId));
            if (index !== -1) {
                balance += selectedCard.price * quantity;
                userInventory.splice(index, quantity);
                renderInventory();
                renderBalance(); // Update balance after transaction
                checkAchievements(); // Check achievements after transaction
            } else {
                alert('You do not own this card to sell!');
                return;
            }
        }

        // Update achievements progress display after transaction
        updateAchievementsProgress();

        console.log('Performed transaction. Updating achievements progress...');
    }
    const levelUpXp = 100*level; // XP needed to level up
    function checkLevelUp() {
        if (xp >= level * levelUpXp) {
            xp -= level * levelUpXp;
            level++;
            document.getElementById('level').innerText = level;
            document.getElementById('xp').innerText = xp;
            alert('Congratulations! You leveled up to Level ' + level + '!');
        }
     }

    // Function to sell all cards of a specific rarity
    function sellAllCardsByRarity(rarity) {
        const confirmed = confirm(`Are you sure you want to sell all ${rarity} cards?`);
        if (!confirmed) return;

        // Loop through each card in the inventory and perform sell transaction
        for (let i = userInventory.length - 1; i >= 0; i--) {
            const card = userInventory[i];
            if (card.rarity === rarity) {
                performTransaction(card.id, 'sell', 1);
            }
        }

        // Re-render the inventory after selling all cards
        renderInventory();
    }

    // Event listeners for the "Sell All" buttons by rarity
    document.getElementById('sell-all-rares-button').addEventListener('click', function() {
        sellAllCardsByRarity('Rare');
    });

    document.getElementById('sell-all-super-rares-button').addEventListener('click', function() {
        sellAllCardsByRarity('Super Rare');
    });

    document.getElementById('sell-all-epics-button').addEventListener('click', function() {
        sellAllCardsByRarity('Epic');
    });

    document.getElementById('sell-all-mythics-button').addEventListener('click', function() {
        sellAllCardsByRarity('Mythic');
    });

        // Function to render tags
        function renderTags() {
            tagsList.innerHTML = '';
            tags.forEach(tag => {
                const li = document.createElement('li');
                li.textContent = tag;
                tagsList.appendChild(li);
            });
        }
    
        // Function to buy the Millionaire Tag
        function buyTag() {
            if(ismillionr===0){
                const tagPrice = 1000000;
                if (balance >= tagPrice) {
                    ismillionr+=1;
                    updateBalance(-tagPrice);
                    tags.push('Millionaire!!');
                    renderTags();
                } else {
                    alert('Insufficient balance to buy the Millionaire Tag.');
                }
            }
            else{
                alert('You already have the Millionaire Tag.');
            }

        }
    
        // Event listener for the 'Buy Millionaire Tag' button
        buyTagButton.addEventListener('click', buyTag);
    

    // Event listener for card select change
    cardSelect.addEventListener('change', function () {
        const selectedCardId = this.value;
        const selectedCard = cards.find(card => card.id === parseInt(selectedCardId));
        document.getElementById('selected-item-name').textContent = selectedCard.name;
        document.getElementById('selected-item-price').textContent = `$${selectedCard.price}`;
        document.getElementById('card-image').src = selectedCard.imageUrl;
    });

    // Event listener for perform transaction button
    performTransactionBtn.addEventListener('click', function () {
        const selectedCardId = cardSelect.value;
        const selectedAction = "buy";
        performTransaction(selectedCardId, selectedAction);
    });

    editProfileBtn.addEventListener('click',function () {
        renderProfileView(); // Render profile view by default
    });
    
    function showNotification(message) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.classList.add('visible'); // Add the class to make it visible
    
        // Hide the notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('visible');
        }, 3000); // 3000ms = 3 seconds
    }

    // Event listener for Refresh Market button
    refreshMarketBtn.addEventListener('click', function () {
        const totalPrice=10;
        if (balance >= totalPrice) {
            balance -= totalPrice;
            renderBalance(); // Update balance after transaction
            // Refresh the market
            cards.forEach(card => {
                switch (card.rarity) {
                    case 'Rare':
                        card.price = getRandomPrice(5, 20);
                        break;
                    case 'Super Rare':
                        card.price = getRandomPrice(25, 45);
                        break;
                    case 'Epic':
                        card.price = getRandomPrice(50, 150);
                        break;
                    case 'Mythic':
                        card.price = getRandomPrice(200, 450);
                        break;
                    case 'Legendary':
                        card.price = getRandomPrice(500, 1000);
                        break;
                    case 'Dev':
                        card.price = getRandomPrice(100000, 1000000);
                        break;
                    default:
                        break;
                }
            });
            updatePricesInInventory();
            renderTransactionCards();
            // Show the notification
            notification.style.display = 'block';
            showNotification('Market Refreshed!');
            // Update achievements progress display after market refresh
            updateAchievementsProgress();
    }
    else{
        alert('Insufficient balance to refresh the market!');
    }
    });

    // Function to generate a random price within a given range
    function getRandomPrice(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate a random number of random cards with randomized prices based on rarity
    function renderTransactionCards() {
        // Clear previous options
        cardSelect.innerHTML = '';
        let availableCards = cards.filter(card => !userInventory.some(inventoryCard => inventoryCard.id === card.id));
        const randomCards = [];

        while (randomCards.length < 2 && availableCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableCards.length);
            const selectedCard = availableCards[randomIndex];
            if (!randomCards.some(card => card.id === selectedCard.id)) {
                randomCards.push(selectedCard);
            }
            availableCards.splice(randomIndex, 1);
        }

        randomCards.forEach(card => {
            const option = document.createElement('option');
            option.value = card.id;
            option.textContent = `${card.name} - ${card.rarity} - $${card.price}`;
            cardSelect.appendChild(option);
        });

        if (cardSelect.value) {
            const selectedCard = randomCards.find(card => card.id === parseInt(cardSelect.value));
            document.getElementById('selected-item-name').textContent = selectedCard.name;
            document.getElementById('selected-item-price').textContent = `$${selectedCard.price}`;
            document.getElementById('card-image').src = selectedCard.imageUrl;
        }
    }

    // Function to sell all cards
    function sellAllCards() {
        const confirmed = confirm('Are you sure you want to sell all your cards?');
        if (!confirmed) return;
    
        // Loop through each card in the inventory and perform sell transaction
        while (userInventory.length > 0) {
            const cardToSell = userInventory[0]; // Sell the first card in the inventory
            performTransaction(cardToSell.id, 'sell', 1);
        }
    
        // Re-render the inventory after selling all cards
        renderInventory();
    }
    
    sellAllButton.addEventListener('click', sellAllCards);

    // Event listener for buy all button
    buyAllButton.addEventListener('click', function () {
        const selectedCardIds = Array.from(cardSelect.selectedOptions).map(option => option.value);
        
        selectedCardIds.forEach(selectedCardId => {
            const selectedCard = cards.find(card => card.id === parseInt(selectedCardId));
            const maxQuantity = Math.floor(balance / selectedCard.price);
            if(selectedCard.rarity=="Legendary"){
                performTransaction(selectedCardId,'buy',5);
            }
            else if(selectedCard.rarity=="Dev"){
                performTransaction(selectedCardId,'buy',2);
            }
            else{
                performTransaction(selectedCardId, 'buy', maxQuantity);
            }
        });
    });
    
    const buyQuantityButton = document.getElementById('buy-quantity-button');

    // Event listener for Buy Quantity button
    buyQuantityButton.addEventListener('click', function () {
        const selectedCardId = cardSelect.value;
        const selectedCard = cards.find(card => card.id === parseInt(selectedCardId));
        const quantity = parseInt(document.getElementById('card-quantity-input').value);
        performTransaction(selectedCardId, 'buy', quantity);
    });

    document.querySelectorAll('.pack-btn').forEach(button => {
        console.log("card open")
        button.addEventListener('click', () => {
            const packType = button.getAttribute('data-pack');
            openCardPack(packType);
        });
    });
    
    // Function to get the price of each pack type
    function getPackPrice(packType) {
        switch (packType) {
            case 'rare':
                return 50; // Adjust the price as needed
            case 'super_rare':
                return 250; // Adjust the price as needed
            case 'epic':
                return 1000; // Adjust the price as needed
            default:
                return 0; // Default price if pack type is not recognized
        }
    }

    
    // Function to open a card pack
    function openCardPack(packType) {
        const packPrice = getPackPrice(packType);
        if (balance >= packPrice) {
            balance -= packPrice; // Deduct the price of the pack from the balance
            renderBalance(); // Update balance display
            openPack(packType); // Generate and add cards to the inventory
        } else {
            alert('Insufficient balance to buy this pack!');
        }
    }

    // Function to generate and add cards to the inventory
    function openPack(packType) {
        let packDetails;
        if (packType === 'rare') {
            packDetails = { count: 3, guarantee: 'Rare', chance: { superRare: 0.5 } };
        } else if (packType === 'super_rare') {
            packDetails = { count: 5, guarantee: 'Super Rare', chance: { epic: 0.25 } };
        } else if (packType === 'epic') {
            packDetails = { count: 10, guarantee: 'Epic', chance: { epic: 0.5 } };
        }

        const drawnCards = [];
        for (let i = 0; i < packDetails.count; i++) {
            let rarity = packDetails.guarantee;
            if (i >= 2 && packType === 'rare' && Math.random() < packDetails.chance.superRare) {
                rarity = 'Super Rare';
            } else if (i >= 3 && packType === 'super_rare' && Math.random() < packDetails.chance.epic) {
                rarity = 'Epic';
            } else if (packType === 'epic' && Math.random() < packDetails.chance.epic) {
                rarity = 'Rare';
            }
            drawnCards.push(getRandomCardByRarity(rarity));
        }

        // Add the drawn cards to the inventory
        drawnCards.forEach(card => {
            userInventory.push(card);
        });

        // Update inventory display
        renderInventory();
    }
   
    function getRandomCardByRarity(rarity) {
        const filteredCards = cards.filter(card => card.rarity === rarity);
        const randomIndex = Math.floor(Math.random() * filteredCards.length);
        return filteredCards[randomIndex];
    }

    // Event listener for the Discord button
    document.getElementById('discord-btn').addEventListener('click', function () {
        window.location.href = 'https://discord.gg/6qb2B7ZSbF';
    });

        // Event listener for the Tutorial button
        document.getElementById('tutorial-btn').addEventListener('click', function () {
            alert("Welcome to the Card Game!\n\n" +
                "The point of the game is to manage your virtual balance to accumulate wealth and collect exclusive tags. " +
                "By making strategic purchases and managing your balance effectively, you can achieve milestones like acquiring the 'Millionaire' tag.\n\n" +
                "Here's how you play:\n" +
                "1. **Balance:** Your current balance is displayed at the top.\n" +
                "2. **Buy Cards:** Purchase cards at the lowest possible price to maximize your profits.\n" +
                "3. **Sell Cards:** Sell your cards at a higher price to make a profit and increase your balance.\n" +
                "4. **Buy Millionaire Tag:** Click the 'Buy Millionaire Tag' button to purchase the Millionaire Tag for $1,000,000.\n" +
                "5. **Inventory:** Your purchased items will be displayed here.\n" +
                "6. **Tags:** Your acquired tags will be listed here.\n" +
                "7. **Discord:** Click the 'Join our Discord Server' button to join our community on Discord.\n\n" +
                "Enjoy the game, make strategic decisions, buy low, sell high, and aim to become a virtual millionaire!");
        });

    // Initial rendering of inventory, balance, and transaction cards
    renderInventory();
    renderBalance();
    renderTransactionCards();
    updateAchievementsProgress(); // Initialize achievements progress display
    renderTags();
});