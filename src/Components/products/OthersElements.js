import Link from 'next/link';

import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import productStyle from '@/styles/product.module.scss';

function OthersElements(props) {
    const elements = props.others.map((item, key)=> {
        return (
            <div key={key} className={productStyle.otherItemWrapper}>
                <div
                    className={`borderRadius ${productStyle.othersImg}`}
                    style={{backgroundImage: `url(${item.image[props.imageDimension]})`}}
                >
                </div>
                <h3 className={typography.smallHeader}>{item.name}</h3>
                <Link 
                    href={`/${item.slug}`}
                    className={`${buttons.baseButton} ${buttons.orangeButton} ${typography.upperCaseBold13px}`}
                >
                    see product
                </Link>
            </div>
        );
    });

    return (
        <section className={`${productStyle.gapContainer} ${productStyle.othersSection}`}>
            <h2 className={typography.mediumHeader}>you may also like</h2>
            <div className={productStyle.othersContainer}>
                {elements}
            </div>
        </section>
    );
}

export default OthersElements;