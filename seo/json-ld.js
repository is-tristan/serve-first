export default function JsonLd({ data }) {

    const schemas = Array.isArray(data) ? data : [data]

    const validSchemas = schemas.filter(Boolean)

    if (!validSchemas.length) {

        return null

    }

    return (

        <>

            {validSchemas.map((schema, index) => (

                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
                    }}
                />

            ))}

        </>

    )

}
