# FizzBuzz TypeScript
下記のルールに従っています。
* コンソール上に```x```から```y```までの数字を順番に出力する

* ただし、```i```の倍数のときは`Fizz`と出力する

* ただし、```j```の倍数のときは`Buzz`と出力する

* ただし、```(i * j)```の倍数のときは`FizzBuzz`と出力する

## FizzBuzzを実行します。

```sh
$ yarn start
```
ルールファイルのパスがない場合は自動的に```resources```ディレクトリの中にある```rule1.json```というファイルを選びます。

```sh
yarn start [ファイルのパス]
```
ルールファイルを指定したい場合はパスを追加して実行します。
例えば:　
```sh
yarn start resources/rule2.json
yarn start yarn start /c/projects/fizz_buzz_ts/rule.json
```

## FizzBuzzのテストを実行します。

```sh
$ yarn test
```