document.addEventListener('DOMContentLoaded', function () {
    // Dummy card data with image URLs, names, and rarities
    let cards = [
 ];


    let userInventory = [];
    let tags = [];
    let balance = 150; // Initial balance
    let secretamount = 0; // amount of times the player got the secret card
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
                // Check if the card being sold is the secret card
                if (card.id === 103) {
                    // Handle selling the secret card
                    sellSecretCard();
                } else {
                    // Perform the regular sell transaction for other cards
                    performTransaction(card.id, 'sell', 1);
                }
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
    
    // Function to handle selling the secret card
    function sellSecretCard() {
        // Perform the transaction for selling the secret card
        const secretCardIndex = userInventory.findIndex(card => card.id === 103);
        if (secretCardIndex !== -1) {
            const secretCard = userInventory[secretCardIndex];
            balance += secretCard.price; // Add the price of the secret card to the balance
            userInventory.splice(secretCardIndex, 1);
            renderInventory();
            renderBalance(); // Update balance after transaction
            checkAchievements(); // Check achievements after transaction
            updateAchievementsProgress(); // Update achievements progress display after transaction
            alert('Congratulations! You sold the secret card!');
        } else {
            alert('You do not own the secret card to sell!');
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
            // Hide the notification after 3 seconds
            setTimeout(function () {
                notification.style.display = 'none';
            }, 3000);

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

        // Check if the player entered the secret code
        if (quantity === 2011) {
            if(secretamount === 0){
            // Add the secret card to the user's inventory
            userInventory.push({
                id: 103, // Secret card ID
                name: "GhostFace Super Secret Card!!",
                rarity: "Secret", // You can adjust the rarity as needed
                price: 1000000, // You can adjust the price as needed
                imageUrl: "https://i.redd.it/ahqhv5sx4ff91.png'" // URL of the secret card image
            });
            // Render the updated inventory
            renderInventory();
            // Inform the player about obtaining the secret card
            alert('Congratulations! You have obtained the secret card!');
            secretamount+=1;
            }
            else{
                alert("You already Got The Secret Card You Cant Get It AnyMore!")
            }
        } else {
            // Proceed with the regular transaction
            performTransaction(selectedCardId, 'buy', quantity);
        }
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