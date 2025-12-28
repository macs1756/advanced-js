





try {

  // має бути await в іншому випадку помилку ми не зловимо
  await new Promise((theResolve, theReject) => {
    theReject('Reason why promise rejected')
  })

} catch (e) {
  console.log('errror:', e);

}

//якщо юзаєш try catch мусиш додавати await або юзати then і catch без цукру

//помилка анкечед тому що ми незахендлили catch колбеком а наш await ресолвить проміс але як true з деталями про помилку