# Manuali e Documentazioni

> [!CAUTION]
> Questa guida è un'introduzione, ma non è esaustiva, cercate sempre
> i manuali originali, visto che le sintassi possono sempre variare

I manuali, o documentazioni, sono e saranno la vostra guida in tutte le
cose che farete, per tanto è utile capire come leggerle.

## Come si legge un manuale[^how-to-read-man-1]

Innanzitutto, un manuale è solitamente un piccolo documento, solitamente
abbreviato con `man`, che vi permette di capire di più su un comando.

Molti comandi in linux, infatti, hanno un piccolo manuale che potete
consultare scrivendo

```bash
man my_command
```

purtroppo dovrete abituarvi che la maggior parte delle informazioni sono
in inglese, e se vorrete approfondire molto questo ambiente, cercate di
farlo diventare il vostro amico.

### Sintassi delle `man pages`

Ogni `man page`, e anche qualche `--help`, contieve questa sintassi,
pertanto è utile guardarla quando in dubbio.

- `[parametro_opzionale]`: Parametri opzionali, messi dentro le parentesi
    quadre, indicano parametri che possono essere messi o meno, solitamente
    che cambiano il comportamento del programma.

    ```bash
        echo [--help] [STRING]
    ```

- `{scelta1, scelta2}`: Possibili scelte, ma limitate a quelle contenute
    tra le graffe.

    ```bash
        {yes, no}
    ```

- `scelta1|scelta2`: Possibili scelte, ma limitate a queste,
  sintassi altrettanto comune

    ```bash
        yes|no
    ```

- `<parametro_obbligatorio>`: Parametro che va inserito necessariamente.
    A scelta dell'utente salvo altre istruzioni.

    ```bash
        c++ <sorgente> [-o [output]]
    ```

> [!NOTE]
> Queste sono solo alcune, ma se volete vederne altre altrettanto importanti,
> usate
>
> ```bash
>   # bash|zsh
>   man man 5
> ```

Come esercizio, provate a far suonare il beep del terminale tramite il
comando `echo`

<details>
    <summary>
        Suggerimento
    </summary>
    Cerca la man page di `echo` sul terminale
</details>

[^how-to-read-man-1]: [Beginners Guide to man Pages](https://www.tfug.org/helpdesk/general/man.html)

## References

- [Beginners Guide to man Pages](https://www.tfug.org/helpdesk/general/man.html)
- [man(1) — Linux manual page](https://man7.org/linux/man-pages/man1/man.1.html)