export const getPayloadPayU = () => {
    return  {
      language: "es",
      command: "SUBMIT_TRANSACTION",
      merchant: {
          apiKey: "4Vj8eK4rloUd272L48hsrarnUA",
          apiLogin: "pRRXKOl8ikMmt9u"
      },
      transaction: {
          order: {
            accountId: "512323",
            referenceCode: "PRODUCT_TEST",
            description: "Payment test description",
            language: "es",
            signature: "f785a4109f2848dfbdbff70568090ddf",
            additionalValues: {
                TX_VALUE: {
                  value: totalPrice,
                  currency: "PEN"
            }
            },
            buyer: {
                merchantBuyerId: "1",
                fullName: name,
                emailAddress: email,
                contactPhone: "7563126",
                dniNumber: documentNumber,
                shippingAddress: {
                  street1: "Av. Isabel La Católica 103-La Victoria",
                  street2: "5555487",
                  city: "Lima",
                  state: "Lima y Callao",
                  country: "PE",
                  postalCode: "000000",
                  phone: "7563126"
                }
            },
            shippingAddress: {
                street1: "Av. Isabel La Católica 103-La Victoria",
                street2: "5555487",
                city: "Lima",
                state: "Lima y Callao",
                country: "PE",
                postalCode: "0000000",
                phone: "7563126"
            }
          },
          payer: {
            merchantPayerId: "508029",
            fullName: name,
            emailAddress: email,
            contactPhone: "999999999",
            dniType: 'DNI',
            dniNumber: documentNumber,
            billingAddress: {
                street1: "Av. Isabel La Católica 103-La Victoria",
                street2: "125544",
                city: "Lima",
                state: "Lima y Callao",
                country: "PE",
                postalCode: "000000",
                phone: "7563126"
            }
          },
          creditCard: {
            number: cardNumber,
            securityCode: cvv,
            expirationDate: expirationDate,
            name: "APPROVED"
          },
          extraParameters: {
            INSTALLMENTS_NUMBER: 1
          },
          type: "AUTHORIZATION",
          paymentMethod: "VISA",
          paymentCountry: "PE",
          // deviceSessionId: "d66f949f19b33e88c202b579cfc549b380200",
          ipAddress: "181.65.101.71",
          cookie: "pt1t38347bs6jc9ruv2ecpv7o2",
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
      },
      test: true
    }
}