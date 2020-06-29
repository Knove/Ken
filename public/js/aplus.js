try {
    with (document)
        with (body)
            with (insertBefore(createElement('script'), firstChild))
                setAttribute(
                    'exparams',
                    'aplus&sidx=aplusSidx',
                    (id = 'beacon-aplus'),
                    (src =
                        'https://assets.alicdn.com/g/alilog/??aplus_plugin_aefront/index.js,mlog/aplus_int.js'),
                );
} catch (e) {}
