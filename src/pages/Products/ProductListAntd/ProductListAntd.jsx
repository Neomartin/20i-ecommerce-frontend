import { Avatar, List, Skeleton } from 'antd'
import React from 'react'

export const ProductListAntd = ({ products }) => {
    return (
        <List>
            {products.map(product => {
                return (
                    <List.Item key={product._id}>
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                avatar={<Avatar src="https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-thumbnail.png" />}
                                title={<a href="https://ant.design">{product.name}</a>}
                                description={product.description}
                            />
                            <div>{product.price}</div>
                        </Skeleton>
                    </List.Item>
                )
            })
            }
        </List >

    )
}
