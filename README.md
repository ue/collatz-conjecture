The numbers of steps required for the algorithm to reach 1 for a_0=1, 2, ... are 0, 1, 7, 2, 5, 8, 16, 3, 19, 6, 14, 9, 9, 17, 17, 4, 12, 20, 20, 7, ... (OEIS A006577; illustrated above). Of these, the numbers of tripling steps are 0, 0, 2, 0, 1, 2, 5, 0, 6, ... (OEIS A006667), and the number of halving steps are 0, 1, 5, 2, 4, 6, 11, 3, 13, ... (OEIS A006666). The smallest starting values of a_0 that yields a Collatz sequence containing n=1, 2, ... are 1, 2, 3, 3, 3, 6, 7, 3, 9, 3, 7, 12, 7, 9, 15, 3, 7, 18, 19, ... (OEIS A070167).

The Collatz problem can be implemented as an 8-register machine (Wolfram 2002, p. 100), quasi-cellular automaton (Cloney et al. 1987, Bruschi 2005), or 6-color one-dimensional quasi-cellular automaton with local rules but which wraps first and last digits around (Zeleny). In general, the difficulty in constructing true local-rule cellular automata arises from the necessity of a carry operation when multiplying by 3 which, in the worst case, can extend the entire length of the base-b representation of digits (and thus require propagating information at faster than the CA's speed of light).

The Collatz problem was modified by Terras (1976, 1979), who asked if iterating

 t_n={1/2t_(n-1)   for t_(n-1) even; 1/2(3t_(n-1)+1)   for t_(n-1) odd 	
(2)
always returns to 1 for initial integer value t_0 (e.g., Lagarias 1985, Cloney et al. 1987). This is simply the original statement above but combining the division by two into the addition step if t_(n-1) is odd, thus compressing the number of steps. The following table gives the 
