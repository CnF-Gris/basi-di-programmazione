# Algoritmi

Che cosa significa programmare?

Programmare significa mettere sotto forma di istruzione ciò che si vuole
fare.

```c++
void fai_colazione(Persona persona) {

    // Piccole costanti
    const string LUOGO_COLAZIONE = "cucina";
    const string ALIMENTO_COLAZIONE = "merendina";

    // Questa è una guardia,
    //  ma ne parleremo più tardi
    if (time.now.hour > 11) {
        return  ;
    }

    // Anche questa è una guardia
    if (persona.staDormendo) {
        sveglia(persona);
    }

    Luogo cucina = persona.casa[
        LUOGO_COLAZIONE
    ];

    persona.vai(cucina);

    Alimento alimento = persona.prendi(
        cucina.frigo[
            ALIMENTO_COLAZIONE
        ];
    );

    persona.consuma(alimento);

    return ;
}
```

Da come potete vedere, una funzione semplice come questa, che opera con
alta astrazione (non richiede molti dettagli su come si faccia la cosa),
ci permette di poter eseguire un'operazione.

Cosa fa questa funzione?

<details>
    <summary>
        Risposta
    </summary>
    La funzione si occupa di far fare colazione ad una persona
</details>

## Cosa è un algoritmo

Un algoritmo non è altri che un modo per esprimere cio che vogliamo passo
dopo passo in maniera non equivocabile.

Per esempio se vi chiedessi di cucinare un'insalata, qualcuno
di voi potrebbe pensare di usare della lattuga, altri della indivia, chi del
radicchio, ecc...

Siccome non ho dato dei dettagli, voi avete interpretato la mia richiesta,
creando un errore nella mia richiesta.

Inoltre si tratta di dare istruzioni semplici che conosce chi le deve eseguire.

Ad esempio se chiedessi a degli studenti delle superiori di calcolarmi
Thevenin o Norton di un circuito, probabilmente mi guarderebbero con faccia
sbigottita, ma se invece gli spiegassi come calcolarlo per mezzo di semplici
moltiplicazioni o addizioni, ci riuscirebbero senza necessariamente sapere
concetti più complessi.

```python
# https://it.wikipedia.org/wiki/Roy_Rogers_(cocktail)

# Questa è una variabile (costante) globale
INGREDIENTI_ROY_ROGERS : set[Ingrediente] = Roy_Rogers.ingredienti

# In python non si usano le parentesi graffe
#   per i blocchi, ma si usano i tab
def prepara_roy_rogers(persona: Persona):
    return persona.mescola(INGREDIENTI_ROY_ROGERS)


def prepara_roy_rogers2(persona: Persona):

    GRANATINA : Ingrediente = persona.prendi(
        INGREDIENTI_ROY_ROGERS["granatina"]
    )
    COLA : Ingrediente = persona.prendi(
        INGREDIENTI_ROY_ROGERS["cola"]
    )

    BICCHIERE = Bicchiere()

    persona.versa(GRANATINA, 100, BICCHIERE)
    persona.versa(COLA, 200, BICCHIERE)

    persona.mescola(BICCHIERE)

    return BICCHIERE

```

Quale dei due per voi si avvicina di più alla definizione di algoritmo?

<details>
    <summary>
        Risposta
    </summary>
    La seconda funzione si avvicina di più alla definizione di algoritmo,
    perché contiene istruzioni più dettagliate di come si prepari questo drink,
    senza che voi ne abbiate mai preparato uno.
</details>
