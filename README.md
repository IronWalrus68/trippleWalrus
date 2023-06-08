# trippleWalrus

This app was created after seeing a commercial slot machine running on a raspberry pie. The plan for this project was to find out if I could create a virtual slot machine that emulates a real slot machine, and to potentially make a physical slot machine my self-using my own raspberry pie.

## Git pages link:
[https://ironwalrus68.github.io/trippleWalrus/](https://ironwalrus68.github.io/trippleWalrus/)

## Usage:
To use the slot machine just open the **index.html** in your browser or go to the git pages link, then to spin the wheel either press the button or press the space bar. By default, you have 100 credits, when you press the button 1 credit is spent. Either the winnings are added to your credit, or the winner line is updated to indicate that you lose. On a win the last win line will continue to display your last win until you win again.

If you want to test play more than 1 game per spin use testPlay() in the terminal. By default, the test will play 10 games but if you pass an argument into the function you can run as many as you want. For example, testPlay(1000) // wheel will spin 1000 times.

## Overview:

This slot machine is based off the par sheet from an old 3-wheel slot machine. The par sheet I used is included in the files and the source for a lot of the information is from:
[https://www.youtube.com/watch?v=OPCAqjswBzM&ab_channel=CowboySlots](https://www.youtube.com/watch?v=OPCAqjswBzM&ab_channel=CowboySlots)
My inspiration also came from the slot machines from the diamond casino in GTA online.

How I intended for this machine to work is I would have 2 sets of 3 reels. Those being the physical wheels and the virtual reels.

**The physical reels** would be the 3 wheels you see spin when you push the button. These reels have 22 possible spots the program can land on but have no effect on the outcome of the game; that comes from the virtual reels.

**The virtual reels** are where the random aspect of the machine comes from. These reels in the machine my project is based on has 32 possible slots to land on per reel. In my code that number can be increased or decreased by adding or removing properties from the VReel objects. This will affect the final pay-out of the machine and how the machine is manipulated.

When a user presses the button the 3 virtual reels are spun and will return the 3 random results. The physical reels will then stop spinning and land on a symbol pre-selected by the virtual reels. In the current version of the code, I have the virtual reels displaying their results directly, the spin animation is still in development.
