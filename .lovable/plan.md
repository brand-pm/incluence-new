

# Редизайн главной страницы — визуальное разделение секций

## Проблема
Все секции используют фоны #080808, #0d0d0d и #111111 — разница всего 2-3% яркости. Визуально страница выглядит как одно чёрное полотно без структуры.

## Решение
Использовать имеющуюся палитру (accent #444CE7, text #F0EBE0, muted tones) для создания контраста через цветовые акценты, паттерны и градиенты — без отхода от тёмной темы.

## Что изменится

### 1. Чередующиеся фоновые эффекты для каждой второй секции
Каждая вторая секция получит тонкий акцентный градиент:
- Subtle radial gradient с accent (#444CE7) at 3-5% opacity в углу или по центру
- Или паттерн grid-dots с чуть повышенной яркостью
- Это создаст ритм "чистый → акцентный → чистый → акцентный"

### 2. Accent-полоски вместо одинаковых SectionDivider
Обновить `SectionDivider` — добавить вариант с тонкой горизонтальной accent-линией (gradient от transparent → #444CE7 → transparent) шириной 100%, высотой 1px. Это чётче отделит секции.

### 3. Секция LicenseCategories — accent glow
- Добавить радиальный градиент `rgba(68,76,231,0.06)` за карточками
- Левый вертикальный accent-бордер (2px #444CE7) у каждой карточки

### 4. Секция ProcessSection — акцентный фон
- Фон: gradient от `#0d0d0d` к `rgba(68,76,231,0.04)` — едва заметный синий оттенок
- Номера шагов (01, 02...) сделать более яркими accent-цветом

### 5. Секция OurServicesSection — grid-dots паттерн
- Добавить CSS-класс `grid-dots` на фон секции для визуальной текстуры
- Accent-линия слева от section-tag

### 6. JurisdictionComparison — без изменений (уже имеет таблицу с contrast)

### 7. JurisdictionsSection — accent underline у заголовка
- Подчеркнуть заголовок секции градиентной accent-линией

### 8. StatsBar — accent gradient background
- Заменить плоский #080808 на subtle gradient: `linear-gradient(135deg, rgba(68,76,231,0.08) 0%, #080808 50%, rgba(68,76,231,0.05) 100%)`
- Это выделит статистику как "особый" блок

### 9. PartnersSection — subtle dot pattern
- Добавить grid-dots на фон для текстуры

### 10. ContactCTA — усилить accent glow
- Увеличить интенсивность radial gradient с accent до 10-12% opacity

## Файлы для изменения
- `src/components/SectionDivider.tsx` — новый gradient divider
- `src/components/LicenseCategories.tsx` — accent glow background
- `src/components/ProcessSection.tsx` — tinted background
- `src/components/OurServicesSection.tsx` — grid-dots pattern
- `src/components/JurisdictionsSection.tsx` — accent underline
- `src/components/StatsBar.tsx` — gradient background
- `src/components/PartnersSection.tsx` — dot pattern
- `src/components/ContactCTA.tsx` — stronger glow
- `src/pages/Index.tsx` — minor wrapper adjustments

