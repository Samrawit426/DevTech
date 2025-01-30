
    const gameElement = document.getElementById('game');
    const statusElement = document.getElementById('status');
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function createBoard() {
        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.addEventListener('click', () => handleCellClick(index));
            cellElement.textContent = cell;
            gameElement.appendChild(cellElement);
        });
    }

    function handleCellClick(index) {
        if (board[index] !== '' || !isGameActive) {
            return;
        }
        board[index] = currentPlayer;
        renderBoard();
        checkWinner();
    }

    function renderBoard() {
        const cells = document.querySelectorAll('.cell');
        board.forEach((cell, index) => {
            cells[index].textContent = cell;
        });
    }

    function checkWinner() {
        let roundWon = false;
        for (const condition of winningConditions) {
            const [a, b, c] = condition;
            if (board[a] === '' || board[b] === '' || board[c] === '') {
                continue;
            }
            if (board[a] === board[b] && board[b] === board[c]) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            statusElement.textContent = `Player ${currentPlayer} wins!`;
            isGameActive = false;
            return;
        }
        if (!board.includes('')) {
            statusElement.textContent = 'Game is a draw!';
            isGameActive = false;
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusElement.textContent = `Current Player: ${currentPlayer}`;
    }

    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        isGameActive = true;
        statusElement.textContent = `Current Player: ${currentPlayer}`;
        gameElement.innerHTML = '';
        createBoard();
    }

    createBoard();
    statusElement.textContent = `Current Player: ${currentPlayer}`;
