# Funzioni

> [!NOTE]
> Per i meno anglofoni, `main` vuol dire *"principale"* o anche
> *"il più importante"*

Le funzioni sono la base di tutti i programmi, tanto che all'inizio di
ogni programma, la prima funzione chiamata è il `main`.

Vi potreste chiedere *"Ma in `Python` non esiste il main"*. Avreste
ragione e torto allo stesso tempo. Infatti molti linguaggi di programmazione,
nel tempo, per snellire le vecchie sintassi (il modo in cui scrivete un
programma), hanno deciso di omettere il vecchio metodo `main`, pur tuttavia
mantenendone le sue funzionalità.

Ad oggi non è raro vedere file come `main.rs`, `main.py` e `main.ts`. Questi
file indicano subito al programmatore qual è il punto di inizio del
programma, permettendo di capire dove intervenire.

Nota va fatta che in alcuni casi, la sintassi `main.[estensione]` non è
obbligatoria, come nel caso di `Python`, ma viene rispettata per motivi
di ordine e semplicità di lettura.

## Come scrivere una funzione

In genere le funzioni le scriviamo per dare delle *"funzionalità"* comuni
al nostro programma, senza doverle ridefinire ogni volta.

Ad esempio, immaginate se ogni volta che dovete fare una moltiplicazione
doveste fare molte somme, a quel punto diventa scocciante dover scrivere
tante volte la stessa cosa, oltre al fatto che se sbagliate qualcosa, dovreste
ricopiarne la correzione ovunque.

Prima di proseguire, consiglio di darvi un'occhiata a
[Come leggere un manuale](./../quality-of-life/MANUALS-AND-DOCS.md#come-si-legge-un-manuale) e poi ritornare qui.

```bash
# C-like syntax
<TIPO_RITORNO> <nome_funzione>( [<TIPO> <parametro_formale>...] )

# Python3
def <nome_funzione>( [parametro_formale[: <TIPO>]...] ) [-> <TIPO_RITORNO>] :
```

Per esempi un po' più pratici

```cpp
int somma(int a, int b);
```

```python
def somma(a: int, b):
    pass

# oppure

def somma(a: int, b: int) -> int:
    pass
```

### Parametri Formali e Parametri Attuali

Per chi ha letto più attentamente, avrà notato che è stato scritto
`parametro_formale` al posto di `argomento`. La cosa è voluta per
agevolare la comprensione di questo concetto che sarà presentato.

- **`parametro_formale`**: Parametro *"segnaposto"*. Serve per permettere alla
    funzione di essere scritta, senza darle un valore fisso, come quando
    scriviamo `y = 2x + 5`. Qui la `x` è solo un segnaposto per un valore.
- **`parametro_attuale`**: Parametro che passiamo alla funzione per farla
    funzionare. Riprendendo l'esempio precedente, è un po' come dire che
    la `x` vale `5`, facendo diventare l'equazione precedente in `y = 2*5 + 5`.

    Questo valore può cambiare di volta in volta e viene passato quando il
    programma è in esecuzione.

Ora un esempio più pratico

```cpp
/**
 * Funzione che calcola l'ordinata
 *  su una retta "y = 2*x + 5"
 *
 * @param ascissa: ascissa del punto
 **/
float ordinataSullaRetta(float ascissa) {
    float ordinata = 2 * ascissa + 5;
    return ordinata;
}

// Questi diventeranno parametri
//  attuali, perché li passiamo
//  alla funzione
float x1 = 5.0f;
float pippo = 2.0f;

// Come vedete, i nomi non importano
float y1 = ordinataSullaRetta(pippo);
float snoopy = ordinataSullaRetta(x1);
```

```python
def ordinata_sulla_retta(ascissa: float) -> float:
    """
    Funzione che calcola l'ordinata su
    una retta "y = 2*x + 5"

        @param ascissa: ascissa del punto
    """
    ordinata : float = 2 * ascissa + 5
    return ordinata

# Questi diventeranno parametri
#   attuali, perché li passiamo
#   alla funzione
x1: float = 5
pippo = 2

# Come vedete, i nomi non importano
y1 = ordinata_sulla_retta(x1)
snoopy: float = ordinata_sulla_retta(pippo)
```

## `int main(int argc, char* argv[])`?

Sicuramente, per chi ha programmato in linguaggi `C-like` questa sintassi
non è nuova, ma ora analizziamo tutte le sue parti

```bash
int|void main ([int <argc>] [, char* <argv>])
```

Questa funzione, quindi, può ritornare un `intero` o `nulla`, **deve**
chiamarsi `main` e poi può avere 2 parametri, uno che è un intero, solitamente
chiamato `argc`, e l'altro un `array` di caratteri, solitamente chiamato
`argv`.

Il primo argomento contiene il numero di argomenti passati al programma,
mentre il secondo contiene un vettore che contiene in ogni elemento un
singolo argomento.

Questo è il modo in cui il vostro programma dovrebbe interagire con il
vostro computer, in particolare il terminale. Se vi è mai capitato
di scrivere `echo "Hello world"`, il vostro programma
avrà ricevuto almeno 2 argomenti, di cui uno è `"Hello World"`.

Come esercizio, provate a scrivere un programma simile ad `echo`, ma in
`python`, così potrete familiarizzare con la documentazione.

<details>
    <summary>
        Suggerimento
    </summary>
    Cerca argv python official docs su Google
</details>

> [!NOTE]
> `argc` e `argv` derivano rispettivamente da `argument count` e
> `argument vecttor`, ovvero `numero di argomenti` e `vettore di argomenti`
