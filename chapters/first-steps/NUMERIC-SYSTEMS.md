# Sistemi Numerici

In generale noi usiamo sistemi numerici **posizionali**, ovvero dove le cifre
hanno un valore che dipende dalla sua posizione all'interno del numero

```bash
1.0     -> 1
10.0    -> 10
0.1     -> 0.1
```

In particolare, una volta scelta la base ed il valore dei simboli, abbiamo il
nostro sistema numerico posizionale. Ad esempio, nel sistema decimale, la base
ha valore `10` e i simboli vanno, in ordine unitario crescente (la cifra dopo
vale uno in più, rispetto a quella di sinistra), da `0`, `1`, `2`, `3`, `4`, `5`,
`6`, `7`, `8`, `9`, fino ad arrivare al valore della base, meno uno (`9` nel sistema decimale).

Per calcolare il valore del numero in un sistema posizionale, sommiamo i singoli
valori delle cifre moltiplicati per la base elevata in base alla sua posizione
rispetto alla virgola. In soldoni:

$$
98.90 = 9 \cdot 10^1 + 8 \cdot 10^0 + 9 \cdot 10^{-1} + 0 \cdot 10^{-2}
$$

Come vedete, la posizione subito a sinistra della virgola ha potenza `0` e
aumenta a sinistra e diminuisce a destra unitariamente.

## Sistema Binario

Il sistema binario è un sistema posizionale che ha **base** `2` e **simboli**
$\{0, 1\}$. Viene usato per via di come i computer trattano i dati. Solitamente
lo riconoscete per il prefisso `0b` che viene messo di fronte a un numero.

```bash
Binario     Decimale
0b0001  ->  1
0b0101  ->  5
0b1101  ->  13
```

## Sistema Esadecimale aka Hexadecimal

Il sistema esadecimale è un sistema posizionale che ha **base** `16` e **simboli**
$\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F\}$, dove
$A=10, B=11, C=12, D=13, E=14, F=15$. Viene usato per rappresentare un byte intero
e lo si riconosce dal prefisso `0x`

> [!NOTE]
> Le lettere possono essere maiuscole o minuscole, è **case insensitive**

```bash
Hex         Decimale
0x12    ->  18
0x31    ->  49
```

## Sistema Ottale

Il sistema esadecimale è un sistema posizionale che ha **base** `8` e **simboli**
$\{0, 1, 2, 3, 4, 5, 6, 7\}$, dove. Non viene usato spesso, ma lo si riconosce
dal prefisso `0o`

```bash
Oct         Decimale
0o12    ->  10
0o31    ->  25
```

## Esercizi

- Tradurre `A1` in **binario**
- Tradurre `24` in **binario**
- Tradurre `1D` in **decimale**
