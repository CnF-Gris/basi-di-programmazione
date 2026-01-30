# Istruzioni di Base

Come detto nel capitolo sugli [Algoritmi](ALGORITHMS.md), un algoritmo prevede
che siano fornite istruzioni di base che l'altra persona sia capace di
comprendere.

A livello più basso, i computer comprendono solo linguaggio macchina, anche
se noi scriviamo in Assembly, linguaggio molto vicino a quello che la macchina
comprende, ma ancora abbastanza capibile da noi.

Il motivo per cui l'assembly non è necessariamente identico al linguaggio
macchina è che ci sono alcune istruzioni che in realtà riassumono più
operazioni macchina in una sola riga.

Tuttavia, molti di noi non toccano assembly e usano linguaggi di alto livello,
come `C`, `C++`, `Python` e altri. Questi linguaggi ci danno la possibilità
di poter sfruttare meno istruzioni per essere più veloci e capire di
più cosa fa il nostro codice.

Infatti il computer comprende solo i bit e i byte, e se dovessimo capire
per bene qualsiasi istruzione di basso livello del computer, sarebbe difficile
anche scrivere un semplice editor di testo senza colori.

## Operatori matematici

> [!CAUTION]
> Occhio, questa non è una lista esaustiva e potrebbero cambiare da linguaggio
> a linguaggio

Anche se qui sono definiti come operatori matematici, potrebbero funzionare
anche su altri tipi, come le stringhe, e permettono di fare operazioni
matematiche o operazioni di aggiunta o rimozione di elementi.

```python
+  # Somma
-  # Differenza
*  # Moltiplicazione
** # Elevamento a potenza
/  # Divisione
%  # Modulo
```

> [!NOTE]
> Molti di questi operatori sono ridefinibili in alcuni linguaggi, ma
> leggete sempre la documentazione o cercate se si può fare o meno

## Operatori Logici

> [!CAUTION]
> Occhio, questa non è una lista esaustiva e potrebbero cambiare da linguaggio
> a linguaggio

Questi operatori sono alla base di tutte le condizioni e ritornano un valore
booleano, ovvero un `True` o un `False`. Fate sempre riferimento alla
documentazione del linguaggio.

```python
==  # Uguale
!=  # Diverso
=== # Uguale senza casting del tipo | stesso oggetto (Dipende dal linguaggio)
!== # Diverso senza casting del tipo | oggetto diverso (Dipende dal linguaggio)
<   # Minore
>   # Maggiore
<=  # Minore o uguale
>=  # Maggiore o uguale
```

> [!NOTE]
> Molti di questi operatori sono ridefinibili in alcuni linguaggi, ma
> leggete sempre la documentazione o cercate se si può fare o meno

## Dichiarazione e Assegnazione (Base)

### Dichiarazione

La dichiarazione fa capire al computer che esiste un qualcosa che deve
ricordare (la variabile). Quindi il computer mette a disposizione una parte
della RAM per contenere quel dato. La dimensione viene decisa in base al
tipo di dato, solitamente.

```cpp
// C like

// Dichiarazione
int c;
```

```python
# Python3

# Dichiarazione
nome_variabile
```

Prima di poter usare una variabile, solitamente questa deve avere un valore,
altrimenti si programma si ***arrabbierà*** con noi.

### Assegnazione

```cpp
// C Like

// Dichiarazione
int c;
// Assegnazione
c = 10;

// Dichiarazione e assegnazione
//  (preferibile)
int d = 10;
```

```python
# Python3

# Dichiarazione
#   In python, senza l'annotazione si arrabbia se dichiarate una
#   variabile senza l'annotazione del tipo
variabile: int

#Assegnazione
variabile = 10

# Dichiarazione e assegnazione
#   (preferibile)
nome_variabile = qualcosa
```
