function verify(n, max, number)
{
    var thisMax = 0;
    while (n > 1)
    {
        if ( n % 2 == 0 )
        {
            n = n / 2;
            thisMax ++;

        } else {
            n = ( 3 * n ) + 1;
            thisMax ++;
        }
    }

    // du blabla
    if (thisMax == max) {
        console.log("The number " + number + " has the same operation total as the number " + magicNumber );
    }else if (thisMax > max) {
    maxLength = thisMax;
    magicNumber = number;
    console.log(" The number " + number + " has the most operation with " + thisMax + " calculation. " );
    }
}


function brutForce()
{
    // ici on va tester pour tout les nombres de 1 à 1.000.000
    for ( let i = 1; i <= 1000000; i++ )
    {
        verify( i, maxLength, i );
    }
    console.log("the maximum combo that accounts " + maxLength +" operations is the number " + magicNumber)
}

var maxLength = 0;
var magicNumber = 0;

brutForce();