const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;
    //console.log(items);
    //console.log(email);

    const transformedItems = items.map(item => ({
        //implicit return
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'inr',
            unit_amount: item.price * 75 * 100,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        }
    }));

    //here are the items... create checkout session

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ["shr_1JQSdlSGbyaZNmmzLj0TBZ0H"],
        shipping_rates: ["shr_1JQSJHSGbyaZNmmzNixlySEd"],
        shipping_address_collection: {
            allowed_countries: ['IN', 'AU', 'CA', 'GB', 'FR', 'DE', 'IT', 'JP', 'MY', 'MV', 'NZ', 'SA', 'SG', 'ZA', 'CH', 'US', 'AE']
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image)),
        },
    });

    res.status(200).json({ id: session.id })
};

// stripe fires off events to webhooks.  store data to firebase